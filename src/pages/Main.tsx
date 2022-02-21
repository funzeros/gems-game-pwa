import BlockCollapse from 'components/BlockCollapse'
import Head from 'components/Head'
import MessageList from 'components/MessageList'
import { Numbers } from 'config/const'
import type { ChangeEventHandler, MouseEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { initPlayer, usePlayer } from 'store/api'

export default function Main(): ReactElement {
	const [player] = usePlayer()
	const [ready, setReady] = useState(false)
	const [playerName, setPlayerName] = useState('')
	const onChange: ChangeEventHandler<HTMLInputElement> = event_ => {
		setPlayerName(event_.target.value.trim())
	}
	const onClick: MouseEventHandler = async () => {
		if (playerName.length < Numbers.two) return
		setReady(true)
		await initPlayer(playerName)
		setReady(false)
	}
	if (player) {
		return (
			<>
				<Head title='进行中' />
				<main className='flex h-full w-full  flex-col bg-gray-100'>
					<section className='flex-1 overflow-hidden shadow-inner'>
						<BlockCollapse />
					</section>
					<section className='flex-1 overflow-hidden p-1 shadow-inner'>
						<MessageList />
					</section>
				</main>
			</>
		)
	}
	return (
		<>
			<Head title='正在进入' />
			<main className='flex h-full w-full  flex-col  items-center justify-center bg-gray-100'>
				{!ready ? (
					<>
						<input
							type='text'
							maxLength={6}
							value={playerName}
							placeholder='请输入您的大名'
							onChange={onChange}
							className=' block w-72'
						/>
						<button
							className='mt-4 block w-72 border-2 border-solid border-black px-10 py-4 text-lg disabled:border-gray-200 disabled:text-gray-200'
							disabled={playerName.length < Numbers.two}
							type='button'
							onClick={onClick}
						>
							开始征途
						</button>
					</>
				) : (
					<>
						<div className='animate-bounce'>正在创建角色</div>
						<div className='animate-pulse'>请等待...</div>
					</>
				)}
			</main>
		</>
	)
}
