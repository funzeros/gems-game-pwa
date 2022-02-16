import { isDate } from 'lodash'
import { useLayoutEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(() => matchMedia(query).matches)

	useLayoutEffect(() => {
		const mediaQuery = matchMedia(query)

		function onMediaQueryChange(): void {
			setMatches(mediaQuery.matches)
		}

		mediaQuery.addEventListener('change', onMediaQueryChange)

		return (): void => {
			mediaQuery.removeEventListener('change', onMediaQueryChange)
		}
	}, [query])

	return matches
}

export function seedRandom(seedSrouce: number): () => number {
	const A = 9301
	const B = 49_297
	const C = 233_280
	const D = 233_280
	let seed = seedSrouce
	return () => {
		seed = (seed * A + B) % C
		return seed / D
	}
}

export const toLocaleString = (time: Date | number | string): string => {
	if (isDate(time)) return time.toLocaleString('zh-CN', { hour12: false })
	return new Date(time).toLocaleString('zh-CN', { hour12: false })
}
