pragma solidity ^0.8.0;

contract Multisig {
    uint public requiredSignatures;
    mapping (address => bool) public isOwner;
    mapping (uint => bool) public usedNonces;
    mapping (uint => mapping(address => bool)) public confirmed;

    event Deposit(address indexed sender, uint amount);
    event SubmitTransaction(address indexed sender, address indexed destination, uint value, bytes data, uint nonce, uint timelock, address[] authorizedUsers);
    event ConfirmTransaction(address indexed sender, uint indexed txIndex);
    event ExecuteTransaction(address indexed sender, uint indexed txIndex);

    struct Transaction {
        address destination;
        uint value;
        bytes data;
        bool executed;
        uint timelock; // the time when the transaction can be executed
        address[] authorizedUsers; // a list of addresses with permission to execute the transaction
    }

    Transaction[] public transactions;
    address[] public owners;

    modifier onlyAuthorizedUsers(uint txIndex) {
        require(isOwner[msg.sender], "Not an owner");
        require(txIndex < transactions.length, "Invalid transaction index");
        Transaction storage transaction = transactions[txIndex];
        require(block.timestamp >= transaction.timelock, "Transaction not yet unlocked");
        bool authorized = false;
        for (uint i = 0; i < transaction.authorizedUsers.length; i++) {
            if (transaction.authorizedUsers[i] == msg.sender) {
                authorized = true;
                break;
            }
        }
        require(authorized, "Not an authorized user");
        _;
    }

    constructor() {
        owners.push(msg.sender);
        isOwner[msg.sender] = true;
    }

    function addOwner(address owner) public {
        require(isOwner[msg.sender], "Not an owner");
        require(owner != address(0), "Invalid owner address");
        require(!isOwner[owner], "Duplicate owner");

        isOwner[owner] = true;
        owners.push(owner);
    }

    function removeOwner(address owner) public {
        require(isOwner[msg.sender], "Not an owner");
        require(isOwner[owner], "Not a current owner");
        require(owners.length > 1, "Cannot remove last owner");

        isOwner[owner] = false;
        for (uint i = 0; i < owners.length; i++) {
            if (owners[i] == owner) {
                owners[i] = owners[owners.length - 1];
                break;
            }
        }
        owners.pop();
    }

    function setRequiredSignatures(uint _requiredSignatures) public {
        require(isOwner[msg.sender], "Not an owner");
        require(_requiredSignatures > 0 && _requiredSignatures <= owners.length, "Invalid number of required signatures");
        requiredSignatures = _requiredSignatures;
    }

    function deposit() public payable {
        emit Deposit(msg.sender, msg.value);
    }

    function submitTransaction(address destination, uint value, bytes memory data, uint timelock, address[] memory authorizedUsers) public returns (uint txIndex) {
        require(isOwner[msg.sender], "Not an owner");
        require(destination != address(0), "Invalid destination address");
            uint nonce = transactions.length;
    bytes32 txHash = keccak256(abi.encodePacked(destination, value, data, nonce, timelock, authorizedUsers));
    require(!usedNonces[uint(txHash)], "Transaction already submitted");

    transactions.push(Transaction({
        destination: destination,
        value: value,
        data: data,
        executed: false,
        timelock: timelock,
        authorizedUsers: authorizedUsers
    }));

    usedNonces[uint(txHash)] = true;
    emit SubmitTransaction(msg.sender, destination, value, data, nonce, timelock, authorizedUsers);
    return nonce;
}

function confirmTransaction(uint txIndex) public onlyAuthorizedUsers(txIndex) {
    Transaction storage transaction = transactions[txIndex];
    require(!transaction.executed, "Transaction already executed");

    confirmed[txIndex][msg.sender] = true;
    emit ConfirmTransaction(msg.sender, txIndex);
}

function executeTransaction(uint txIndex) public onlyAuthorizedUsers(txIndex) {
    Transaction storage transaction = transactions[txIndex];
    require(!transaction.executed, "Transaction already executed");

    uint confirmations = 0;
    for (uint i = 0; i < transaction.authorizedUsers.length; i++) {
        address authorizedUser = transaction.authorizedUsers[i];
        if (confirmed[txIndex][authorizedUser]) {
            confirmations++;
        }
    }
    require(confirmations >= requiredSignatures, "Not enough confirmations");

    transaction.executed = true;
    (bool success, ) = transaction.destination.call{value: transaction.value}(transaction.data);
    require(success, "Transaction execution failed");

    emit ExecuteTransaction(msg.sender, txIndex);
}

function getTransactionCount() public view returns (uint count) {
    return transactions.length;
}

function getOwners() public view returns (address[] memory) {
    return owners;
}

function isConfirmed(uint txIndex, address owner) public view returns (bool) {
    return confirmed[txIndex][owner];
}

function getTransaction(uint txIndex) public view returns (address destination, uint value, bytes memory data, bool executed, uint timelock, address[] memory authorizedUsers) {
    Transaction storage transaction = transactions[txIndex];
    return (transaction.destination, transaction.value, transaction.data, transaction.executed, transaction.timelock, transaction.authorizedUsers);
}

function getPendingTransactions() public view returns (uint[] memory) {
    uint[] memory pendingTransactions = new uint[](transactions.length);
    uint count = 0;
    for (uint i = 0; i < transactions.length; i++) {
        if (!transactions[i].executed) {
            pendingTransactions[count] = i;
            count++;
        }
    }
    uint[] memory result = new uint[](count);
    for (uint i = 0; i < count; i++) {
        result[i] = pendingTransactions[i];
    }
    return result;
}
}