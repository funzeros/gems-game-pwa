import { Numbers } from 'config/const'
import { useLiveQuery } from 'dexie-react-hooks'
import { Block } from './block'
import { database } from './databse'
import { MessageItem } from './message'
import { Biology } from './role'

export async function getBlockIdByXY(x: number, y: number) {
	const block = (await database.block.get(['x', 'y'])) as Block | undefined
	if (block) return block.id
	const result = await database.block.add(Block.create({ x, y }))
	return result as number
}

export async function initPlayer() {
	const playerCount = await database.biology
		.where({ isPlayer: Numbers.true })
		.count()
	// 如果没查到玩家信息个数就新建一个玩家
	if (!playerCount) {
		const blockId = await getBlockIdByXY(0, 0)
		await database.biology.add(Biology.createPlayer(blockId))
	}
	const player = (await database.biology.get({
		isPlayer: Numbers.true
	})) as Biology
	// 如果是刷新就不插入消息
	if (!window.name) {
		window.name = Date.now().toString()
		void database.messageList.add(MessageItem.sys(`欢迎回来，${player.name}`))
	}
}

export async function setBlockIdToBiologyblockId(id: number, blockId: number) {
	await database.biology.update(id, { blockId })
}

export function usePlayer() {
	const player = useLiveQuery<Biology>(async () =>
		database.biology.get({ isPlayer: Numbers.true })
	)
	return [player]
}
