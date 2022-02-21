import { Numbers } from 'config/const'
import { useLiveQuery } from 'dexie-react-hooks'
import { times } from 'lodash'
import { Block } from './block'
import { Building } from './building'
import { database } from './databse'
import { engine } from './engine'
import { MessageItem } from './message'
import { Biology } from './role'

export async function genBuildingByBlockId(blockId: number) {
	const buildings = times(engine.randomInteger(Numbers.ten, Numbers.five), () =>
		Building.create({ blockId })
	)
	await database.building.bulkAdd(buildings)
}
export async function exploreBuilding(id: number) {
	const result = await database.building.update(id, {
		hasExplored: Numbers.true
	})
	return result
}
export async function changeExporeValue(id: number, exploreValue: number) {
	const result = await database.block.update(id, {
		exploreValue
	})
	return result
}
export async function getBlockIdByXY(x: number, y: number) {
	const block = (await database.block.get(['x', 'y'])) as Block | undefined
	if (block) return block.id
	const blockId = (await database.block.add(Block.create({ x, y }))) as number
	await genBuildingByBlockId(blockId)
	return blockId
}

export async function initPlayer(playerName: string) {
	const playerCount = await database.biology
		.where({ isPlayer: Numbers.true })
		.count()
	// 如果没查到玩家信息个数就新建一个玩家
	if (!playerCount) {
		const blockId = await getBlockIdByXY(0, 0)
		await database.biology.add(Biology.createPlayer(playerName, blockId))
	}
	const player = (await database.biology.get({
		isPlayer: Numbers.true
	})) as Biology
	if (playerCount) return
	void database.messageList.add(
		MessageItem.sys(`欢迎来到这个世界，${player.name}`)
	)
}

export function usePlayer() {
	const player = useLiveQuery<Biology>(async () =>
		database.biology.get({ isPlayer: Numbers.true })
	)
	return [player]
}
