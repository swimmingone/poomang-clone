import type { AppProps } from 'next/app';
import '../src/common/styles/globals.css';
import Layout from '../src/common/components/Layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	);
}

export default MyApp;
