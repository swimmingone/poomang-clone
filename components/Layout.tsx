import React, { ReactChild, ReactChildren } from 'react';

import Head from "next/head";

interface Props {
	children: ReactChild | ReactChildren;
}
const Layout = ({ children }: Props) => {
	return (
		<>
            <Head>
                <title>너만의 우주, 푸망</title>
                <link rel="icon" href="/favicon.jpg" />
            </Head>
			<div className={'flex justify-center'}>{children}</div>
		</>
	);
};

export default Layout;
