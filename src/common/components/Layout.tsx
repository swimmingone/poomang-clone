import React, { ReactChild, ReactChildren } from 'react';

import Head from 'next/head';

interface Props {
	children: ReactChild | ReactChildren;
}
const Layout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<title>TodoApp</title>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon_32.png" />
				<link rel="icon" type="image/png" sizes="256x256" href="/favicon_256.png" />
			</Head>
			<div
				className={
					'box-border flex w-screen flex-col items-center justify-between bg-white p-2 md:p-8 lg:p-16 xl:p-16 2xl:px-32'
				}
			>
				{children}
			</div>
		</>
	);
};

export default Layout;
