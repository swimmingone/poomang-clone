import type { AppProps } from 'next/app';
import '../src/common/styles/globals.css';
import Layout from '../src/common/components/Layout';
import { RecoilRoot } from 'recoil';
import TodoContext from '../src/todo/store/todoContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TodoContext.Provider value={[]}>
			<RecoilRoot>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RecoilRoot>
		</TodoContext.Provider>
	);
}

export default MyApp;
