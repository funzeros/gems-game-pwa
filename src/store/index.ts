import type { Table } from 'dexie'
import Dexie from 'dexie'
import { createModel } from 'hox'
import { useState } from 'react'

export class MessageItem {
	public id = ''

	public createTime = Date.now()

	public attach: Record<string, string>[] = []

	public sounder: string

	public content: string

	protected constructor(
		sounder: string,
		content: string,
		attach?: Record<string, string>[]
	) {
		this.sounder = sounder
		this.content = content
		if (attach) this.attach = attach
	}

	public static create(
		sounder: string,
		content: string,
		attach?: Record<string, string>[]
	) {
		const { id, ...item } = new MessageItem(sounder, content, attach)
		return item
	}

	public static sys(content: string, attach?: Record<string, string>[]) {
		const { id, ...item } = new MessageItem('系统', content, attach)
		return item
	}
}
const DATEBASE_VERSION = 1

export const database = new Dexie('GemsGame') as Dexie &
	Record<'messageList', Table>
function useStore() {
	const [messageList, setMessageList] = useState<MessageItem[]>([])
	database.version(DATEBASE_VERSION).stores({
		messageList: '++id,createTime,sounder,content,attach'
	})
	void database.messageList.add(MessageItem.sys('欢迎回来，勇士'))
	return {
		database,
		messageList,
		setMessageList
	}
}

export const useStoreModel = createModel(useStore)
