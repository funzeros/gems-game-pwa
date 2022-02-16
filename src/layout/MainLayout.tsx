import { genRoute } from 'components/MyRoutes'
import { defineRoutes, RoutePath } from 'pages/router'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Redirect, Switch, useHistory, useLocation } from 'react-router-dom'
import { Tabbar } from 'react-vant'

const MyRoutes = genRoute(defineRoutes('tabbar'))

interface TabbarItemOptions {
	icon: string
	name: string
	label: string
}
const tabbarList: TabbarItemOptions[] = [
	{
		icon: 'friends-o',
		name: RoutePath.team,
		label: '队伍'
	},
	{
		icon: 'home-o',
		name: RoutePath.main,
		label: '场景'
	},
	{
		icon: 'bar-chart-o',
		name: RoutePath.rank,
		label: '排位'
	}
]
export default function MainLayout(): ReactElement {
	const history = useHistory()
	const location = useLocation()
	const [pathname, setPathname] = useState<string>(() =>
		tabbarList.map(({ name }) => name).includes(location.pathname)
			? location.pathname
			: RoutePath.main
	)
	function onChange(value: number | string): void {
		const name = value as string
		history.push(name)
		setPathname(name)
	}
	return (
		<section className='fixed flex h-screen  w-screen flex-col  overflow-hidden bg-gray-100'>
			<div className='flex-1 overflow-hidden'>
				<Switch>
					{MyRoutes}
					<Redirect exact to={RoutePath.main} />
				</Switch>
			</div>
			<Tabbar
				value={pathname}
				fixed={false}
				safeAreaInsetBottom
				onChange={onChange}
			>
				{tabbarList.map(({ icon, name, label }) => (
					<Tabbar.Item icon={icon} name={name} key={name}>
						{label}
					</Tabbar.Item>
				))}
			</Tabbar>
		</section>
	)
}
