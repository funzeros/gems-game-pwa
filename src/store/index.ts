import { Numbers } from 'config/const'
import type { Table } from 'dexie'
import Dexie from 'dexie'
import { createModel } from 'hox'
import { Block } from './block'
import { Building } from './building'
import { MessageItem } from './message'
import { Biology } from './role'

export * from './block'
export * from './building'
export * from './message'
export * from './role'

const DATEBASE_VERSION = 8

const tables = {
	messageList: MessageItem.getField(),
	block: Block.getField(),
	biology: Biology.getField(),
	building: Building.getField()
}

export const database = new Dexie('GemsGame') as Dexie &
	Record<keyof typeof tables, Table>

const initDatabse = async () => {
	database
		.version(DATEBASE_VERSION)
		.stores(tables)
		.upgrade(() => {
			setTimeout(() => {
				void database.messageList.add(
					MessageItem.sys(`世界数据存储系统已升级至v${DATEBASE_VERSION}版本`)
				)
			}, Numbers.thousand)
		})
	const playerCount = await database.biology
		.where({ isPlayer: Numbers.true })
		.count()
	if (!playerCount) {
		await database.biology.add(Biology.createPlayer())
	}
	const player = (await database.biology
		.where({ isPlayer: Numbers.true })
		.first()) as Biology
	void database.messageList.add(MessageItem.sys(`欢迎回来，${player.name}`))
}
async function useStore() {
	await initDatabse()
	return {}
}

export const useStoreModel = createModel(useStore)
