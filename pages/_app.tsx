import type { AppProps } from 'next/app';
import '../src/common/styles/globals.css';
import Layout from '../src/common/components/Layout';
import { RecoilRoot } from 'recoil';
import TodoProvider from '../src/todo/provider/TodoProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TodoProvider>
			<RecoilRoot>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RecoilRoot>
		</TodoProvider>
	);
}

export default MyApp;
