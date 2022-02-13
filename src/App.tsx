import LoadingOrError from 'components/LoadingOrError'
import { defineRoutes, RoutePath } from 'pages/router'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'react-vant/lib/index.css'

const MainLayout = lazy(async () => import('layout/MainLayout'))
export default function App(): ReactElement {
	const routePageConfig = defineRoutes()
	const routePage = routePageConfig.map(({ path, ...config }) => (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Route key={path as string} path={path} {...config} />
	))

	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Switch>
					<Route path='/' component={MainLayout} />
					{routePage}
					<Redirect exact from='/*' to={RoutePath.default} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	)
}
