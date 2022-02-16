import Head from 'components/Head'
import MessageList from 'components/MessageList'
import type { ReactElement } from 'react'
import { useStoreModel } from 'store'

export default function Main(): ReactElement {
	useStoreModel()
	return (
		<>
			<Head title='GemsGame-场景' />
			<main className='flex h-full w-full  flex-col  bg-gray-100'>
				<section className='flex-1 overflow-hidden bg-green-500' />
				<section className='flex-1 overflow-hidden shadow-inner'>
					<MessageList />
				</section>
			</main>
		</>
	)
}
