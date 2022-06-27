import type { AppProps } from 'next/app';
import '../src/common/styles/globals.css';
import Layout from '../src/common/components/Layout';
import TodoProvider from '../src/todo/provider/TodoProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TodoProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</TodoProvider>
	);
}

export default MyApp;
