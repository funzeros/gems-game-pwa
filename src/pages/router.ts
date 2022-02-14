import { lazy } from 'react'
import type { RouteProps } from 'react-router-dom'

export const enum RoutePath {
	default = '/',
	tabbar = '/tabbar',
	main = '/tabbar/main',
	team = '/tabbar/team',
	rank = '/tabbar/rank',
	login = '/login'
}
export function defineRoutes(type?: 'tabbar'): RouteProps[] {
	switch (type) {
		case 'tabbar':
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
				},
				{
					path: RoutePath.team,
					component: lazy(async () => import('pages/Team')),
					exact: true
				}
			]
		default:
			return [
				{
					path: RoutePath.login,
					component: lazy(async () => import('pages/Login')),
					exact: true
				}
			]
	}
}
