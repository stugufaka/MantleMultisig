import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Social_dropdown from '../../components/dropdown/Social_dropdown';
import Auctions_dropdown from '../../components/dropdown/Auctions_dropdown';
import user_data from '../../data/user_data';
import User_items from '../../components/user/User_items';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Head from 'next/head';
import Meta from '../../components/Meta';

const User = () => {
	const router = useRouter();
	const pid = router.query.user;
	// console.log(pid);

	const [likesImage, setLikesImage] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleLikes = () => {
		if (!likesImage) {
			setLikesImage(true);
		} else {
			setLikesImage(false);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}, [copied]);

	return (
		<>
			<Meta title="User || Xhibiter | NFT Marketplace Next.js Template" />
			{/* <!-- Profile --> */}
			{user_data
				.filter((item) => item.id === pid)
				.map((item) => {
					const { id, image, title, userId, text, joinYear, icon, coverPhoto } = item;
					return (
						<div className="pt-[5.5rem] lg:pt-24" key={id}>
							{/* <!-- Banner --> */}
							
							{/* <!-- end banner --> */}
							<section className="dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28">
								

								<div className="container">
									<div className="text-center">
										
										<div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4">
											<Tippy content="ETH">
												<svg className="icon h-4 w-4 mr-1">
													<use xlinkHref="/icons.svg#icon-ETH"></use>
												</svg>
											</Tippy>

											<Tippy
												hideOnClick={false}
												content={copied ? <span>copied</span> : <span>copy</span>}
											>
												<button className="js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap">
													<CopyToClipboard text={userId} onCopy={() => setCopied(true)}>
														<span>{userId}</span>
													</CopyToClipboard>
												</button>
											</Tippy>
										</div>

								

					
									</div>
								</div>
							</section>
							{/* <!-- end profile --> */}
							<User_items />
						</div>
					);
				})}
		</>
	);
};

export default User;
