import Head from 'components/Head'
import MessageList from 'components/MessageList'
import type { ReactElement } from 'react'
import { useStoreModel } from 'store'

export default function Main(): ReactElement {
	useStoreModel()
	return (
		<>
			<Head title='GemsGame-场景' />
			<div className='flex h-full w-full  flex-col  bg-gray-100'>
				<div className='flex-1 overflow-hidden bg-green-500' />
				<div className='flex-1 overflow-hidden shadow-inner'>
					<MessageList />
				</div>
			</div>
		</>
	)
}
