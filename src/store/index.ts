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

const DATEBASE_VERSION = 6

const tables = {
	messageList: MessageItem.getField(),
	block: Block.getField(),
	biology: Biology.getField(),
	building: Building.getField()
}
export const database = new Dexie('GemsGame') as Dexie &
	Record<keyof typeof tables, Table>

function useStore() {
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
	void database.messageList.add(MessageItem.sys('欢迎回来，勇士'))
	return {}
}

export const useStoreModel = createModel(useStore)
