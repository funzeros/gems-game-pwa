function numberEqual(this: number, number_: number) {
	return number_ === this
}
export const registerUtil = () => {
	window.log = (first: string, ...rest: unknown[]) => {
		// eslint-disable-next-line no-console
		console.log(
			`%clog:%c${first}`,
			'background:green;color:white;border-radius:4px;padding:0 4px;margin-right:6px',
			'background:blue;color:white;border-radius:4px;padding:0 4px',
			...rest
		)
	}

	Reflect.set(Number.prototype, 'equal', numberEqual)
}
