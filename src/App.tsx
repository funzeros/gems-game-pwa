import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useStoreModel } from 'store'

const MainLayout = lazy(async () => import('layout/MainLayout'))

export default function App(): ReactElement {
	useStoreModel()
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Route path='/' component={MainLayout} />
					<LoadingOrError error={new Error('404')} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
