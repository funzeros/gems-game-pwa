import type { ReactElement } from 'react'
import type { RouteProps } from 'react-router-dom'
import { Route } from 'react-router-dom'

export function genRoute(list: RouteProps[]): ReactElement[] {
	return list.map(({ path, ...config }) => (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Route key={path as string} path={path} {...config} />
	))
}
