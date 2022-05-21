import React, { ReactChild, ReactChildren } from 'react';

import Seo from './Seo';

interface Props {
	children: ReactChild | ReactChildren;
}
const Layout = ({ children }: Props) => {
	return (
		<>
			<Seo />
			<div className={'flex justify-center'}>{children}</div>
		</>
	);
};

export default Layout;
