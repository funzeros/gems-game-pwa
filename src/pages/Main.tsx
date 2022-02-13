import Head from 'components/Head'
import type { ReactElement } from 'react'

export default function Main(): ReactElement {
	return (
		<>
			<Head title='GemsGame-场景' />
			<div className='flex h-full w-full  flex-col  bg-gray-100'>
				<div className='flex-1 overflow-hidden bg-green-500' />
				<div className='flex-1 overflow-hidden bg-blue-500' />
			</div>
		</>
	)
}
