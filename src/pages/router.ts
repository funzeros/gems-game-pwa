import { lazy } from 'react'
import type { RouteProps } from 'react-router-dom'

export const enum RoutePath {
	default = '/',
	main = '/main',
	team = '/team',
	rank = '/rank'
}
export function defineRoutes(type?: 'tabbar'): RouteProps[] {
	if (type === 'tabbar') {
		return [
			{
				path: RoutePath.main,
				component: lazy(async () => import('pages/Main')),
				exact: true
			},
			{
				path: RoutePath.rank,
				component: lazy(async () => import('pages/Rank')),
				exact: true
			}
		]
	}
	return []
}
