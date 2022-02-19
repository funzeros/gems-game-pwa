import BlockCollapse from 'components/BlockCollapse'
import Head from 'components/Head'
import MessageList from 'components/MessageList'
import type { ReactElement } from 'react'

export default function Main(): ReactElement {
	return (
		<>
			<Head title='GemsGame-场景' />
			<main className='flex h-full w-full  flex-col  bg-gray-100'>
				<section className='flex-1 overflow-hidden p-1 shadow-inner'>
					<BlockCollapse />
				</section>
				<section className='flex-1 overflow-hidden p-1 shadow-inner '>
					<MessageList />
				</section>
			</main>
		</>
	)
}
