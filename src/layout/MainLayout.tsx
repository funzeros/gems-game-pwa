import { genRoute } from 'components/MyRoutes'
import { defineRoutes, RoutePath } from 'pages/router'
import type { ReactElement } from 'react'
import { Redirect, Switch } from 'react-router-dom'

const MyRoutes = genRoute(defineRoutes())

export default function MainLayout(): ReactElement {
	return (
		<section className='fixed  h-screen w-screen flex-col overflow-hidden bg-gray-100 over70vh:left-1/2 over70vh:w-half-screen over70vh:-translate-x-1/2'>
			<Switch>
				{MyRoutes}
				<Redirect exact to={RoutePath.main} />
			</Switch>
		</section>
	)
}
