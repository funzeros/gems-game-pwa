import { defineRoutes, RoutePath } from 'pages/router'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { Tabbar } from 'react-vant'

export default function MainLayout(): ReactElement {
	const routeTabbarConfig = defineRoutes('tabbar')
	const routeTabbar = routeTabbarConfig.map(({ path, ...config }) => (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Route key={path as string} path={path} {...config} />
	))
	const history = useHistory()
	const [pathname, setPathname] = useState<string>(history.location.pathname)

	useEffect(() => {
		setPathname(history.location.pathname)
	}, [history.location.pathname])

	function onChange(value: number | string): void {
		const name = value as string
		history.push(name)
	}
	return (
		<div className='fixed flex h-screen  w-screen flex-col  overflow-hidden bg-gray-100'>
			<div className='flex-1 overflow-hidden'>
				<Switch>
					{routeTabbar}
					<Redirect exact from='/*' to={RoutePath.main} />
				</Switch>
			</div>
			<Tabbar
				value={pathname}
				fixed={false}
				safeAreaInsetBottom
				onChange={onChange}
			>
				<Tabbar.Item icon='friends-o' name={RoutePath.team}>
					队伍
				</Tabbar.Item>
				<Tabbar.Item icon='home-o' name={RoutePath.main}>
					场景
				</Tabbar.Item>
				<Tabbar.Item icon='bar-chart-o' name={RoutePath.rank}>
					排位
				</Tabbar.Item>
			</Tabbar>
		</div>
	)
}
