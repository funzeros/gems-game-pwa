import { useLiveQuery } from 'dexie-react-hooks'
import type { ReactElement } from 'react'
import type { MessageItem } from 'store'
import { database } from 'store'
import { toLocaleString } from 'utils'
import LoadingOrError from './LoadingOrError'

export default function MessageList(): ReactElement {
	const MESSAGE_SHOW_LIMIT = 20
	const messageList = useLiveQuery<MessageItem[]>(
		async () =>
			database.messageList
				.orderBy('createTime')
				.reverse()
				.limit(MESSAGE_SHOW_LIMIT)
				.toArray(),
		[]
	)
	if (!messageList) return <LoadingOrError />
	return (
		<ul className=' p-1 text-xs'>
			{messageList
				.map(({ id, sounder, createTime, content }) => (
					<li key={id}>
						<span>[{toLocaleString(createTime)}]</span>
						<span>{sounder}:</span>
						<span>{content}</span>
					</li>
				))
				.reverse()}
		</ul>
	)
}
