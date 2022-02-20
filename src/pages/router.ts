import { lazy } from 'react'
import type { RouteProps } from 'react-router-dom'

export const enum RoutePath {
	default = '/',
	main = '/main'
}
export function defineRoutes(): RouteProps[] {
	return [
		{
			path: RoutePath.main,
			component: lazy(async () => import('pages/Main')),
			exact: true
		}
	]
}
