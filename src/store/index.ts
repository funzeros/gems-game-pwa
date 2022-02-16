import type { Table } from 'dexie'
import Dexie from 'dexie'
import { createModel } from 'hox'
import { useState } from 'react'
import { MessageItem } from './message'

export * from './block'
export * from './building'
export * from './message'
export * from './role'

const DATEBASE_VERSION = 1

export const database = new Dexie('GemsGame') as Dexie &
	Record<'messageList', Table>

function useStore() {
	database.version(DATEBASE_VERSION).stores({
		messageList: '++id,createTime,sounder,content,attach'
	})
	const [messageList, setMessageList] = useState<MessageItem[]>([])
	void database.messageList.add(MessageItem.sys('欢迎回来，勇士'))
	return {
		database,
		messageList,
		setMessageList
	}
}

export const useStoreModel = createModel(useStore)
