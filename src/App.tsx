import LoadingOrError from 'components/LoadingOrError'
import { genRoute } from 'components/MyRoutes'
import { defineRoutes, RoutePath } from 'pages/router'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'react-vant/lib/index.css'

const MainLayout = lazy(async () => import('layout/MainLayout'))

const MyRoutes = genRoute(defineRoutes())

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Redirect exact from='/' to={RoutePath.tabbar} />
					<Route path={RoutePath.tabbar} component={MainLayout} />
					{MyRoutes}
					<LoadingOrError error={new Error('404')} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
