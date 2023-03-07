import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Activity_item from '../collectrions/Activity_item';
import Image from 'next/image';
import Feature_collections_data from '../../data/Feature_collections_data';
import Trending_categories_items from '../categories/trending_categories_items';
import 'react-tabs/style/react-tabs.css';
import Explore_collection_item from '../collectrions/explore_collection_item';
import { AuthContext } from '../../utils/AuthProvider';

const User_items = () => {
	const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
const [dashboard, setdashboard] = useState([])
  const [nfts, setnft] = useState([]);
  async function loadNFTS() {
    const nft = await signer?.fetchMyNFTs();
    setnft(nft);
	}
	async function loadDashboard() {
		const data = await signer?.fetchItemsListed();
		setdashboard(data);
		console.log("nft ----------", data);
	  }
  useEffect(() => {
	  loadNFTS();
	  loadDashboard()
  }, [signer]);

	
 

	const [itemActive, setItemActive] = useState(1);
	const tabItem = [
		{
			id: 1,
			text: 'My Asset',
			icon: 'on-sale',
		},
		{
			id: 2,
			text: 'Sell Asset',
			icon: 'owned',
		},
		{
			id: 3,
			text: 'Dashboard',
			icon: 'created',
		},
		
	];
	return (
		<>
			<section className="relative py-24">
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					{/* <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" /> */}
					<Image
						src="/images/gradient_light.jpg"
						alt="gradient"
						className="h-full w-full"
						layout="fill"
					/>
				</picture>
				<div className="container">
					{/* <!-- Tabs Nav --> */}
					<Tabs className="tabs">
						<TabList className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center">
							{tabItem.map(({ id, text, icon }) => {
								return (
									<Tab
										className="nav-item"
										role="presentation"
										key={id}
										onClick={() => setItemActive(id)}
									>
										<button
											className={
												itemActive === id
													? 'nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active'
													: 'nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white'
											}
										>
											<svg className="icon mr-1 h-5 w-5 fill-current">
												<use xlinkHref={`/icons.svg#icon-${icon}`}></use>
											</svg>
											<span className="font-display text-base font-medium">{text}</span>
										</button>
									</Tab>
								);
							})}
						</TabList>

						<TabPanel>
							<div>
								<Trending_categories_items nft={nfts} itemActive={itemActive}  />
							</div>
						</TabPanel>
						<TabPanel>
							<div>
								<Trending_categories_items nft={nfts} itemActive={itemActive} />
							</div>
						</TabPanel>
						<TabPanel>
							<div>
								<Trending_categories_items nft={dashboard}  itemActive={itemActive}/>
							</div>
						</TabPanel>
						
					</Tabs>
				</div>
			</section>
		</>
	);
};

export default User_items;
