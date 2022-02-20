import type { ReactElement } from 'react'

interface Properties {
	error?: Error
	inner?: boolean
}
export default function LoadingOrError({
	error,
	inner
}: Properties): ReactElement {
	return (
		<div
			className={`flex ${
				inner ? 'min-h-full' : 'min-h-screen'
			} items-center justify-center`}
		>
			<h1 className='text-xl' data-testid='LoadingOrError'>
				{error ? error.message : 'Loading...'}
			</h1>
		</div>
	)
}
LoadingOrError.defaultProps = {
	error: undefined,
	inner: false
}
