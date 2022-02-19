/* eslint-disable no-console */
export const registerUtil = () => {
	window.log = (first: string, ...rest: unknown[]) => {
		console.count(first)
		console.time(first)
		console.log(
			`%clog:%c${first}`,
			'background:green;color:white;border-radius:4px;padding:0 4px;margin-right:6px',
			'background:blue;color:white;border-radius:4px;padding:0 4px',
			...rest
		)
		console.timeEnd(first)
	}
}
