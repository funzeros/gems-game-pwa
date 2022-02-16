import App from 'App'
import { registerUtil } from 'config/myUtil'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerUtil()
registerSW()

const MAX_RETRIES = 1
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
})

ReactDOM.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>,
	document.querySelector('#root')
)
