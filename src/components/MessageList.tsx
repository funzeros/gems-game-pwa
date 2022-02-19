import { Numbers } from 'config/const'
import { useLiveQuery } from 'dexie-react-hooks'
import type { ReactElement, UIEventHandler } from 'react'
import { useEffect, useRef, useState } from 'react'
import type { MessageItem } from 'store'
import { database } from 'store/databse'
import { toLocaleString } from 'utils'
import LoadingOrError from './LoadingOrError'

export default function MessageList(): ReactElement {
	const [size, setSize] = useState(Numbers.zero)
	const [autoScroll, setAutoScroll] = useState(true)

	const messageList = useLiveQuery<MessageItem[]>(
		async () =>
			database.messageList
				.orderBy('createTime')
				.reverse()
				.limit(Numbers.halfHundred)
				.toArray(),
		[size]
	)
	const list = useRef<HTMLUListElement>(null)
	const messagesEndReference = useRef<HTMLDivElement>(null)
	function messageChangeScroll() {
		// 自动滚动
		if (autoScroll) {
			messagesEndReference.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}
	const onScroll: UIEventHandler = event_ => {
		event_.preventDefault()
		if (!list.current) return
		const { scrollHeight, scrollTop, clientHeight } = list.current
		const height = scrollTop + clientHeight
		// 如果滚动条在最底部允许自动滚动 否则 不自动滚动
		if (scrollHeight - height > Numbers.twenty) {
			if (autoScroll) setAutoScroll(false)
		} else {
			if (!autoScroll) setAutoScroll(true)
			return
		}
		// 如果滚动条在最顶部则加载更多数据
		if (Numbers.zero === scrollTop) {
			setSize(preValue => preValue + Numbers.twenty)
		}
	}

	useEffect(messageChangeScroll, [autoScroll, messageList])

	if (messageList)
		return (
			<ul
				className=' h-full overflow-x-hidden overflow-y-scroll text-base'
				onScroll={onScroll}
				ref={list}
			>
				{messageList
					.map(({ id, sounder, createTime, content }) => (
						<li key={id}>
							<span>[{toLocaleString(createTime)}]</span>
							<span>{sounder}：</span>
							<span>{content}</span>
						</li>
					))
					.reverse()}
				<div ref={messagesEndReference} />
			</ul>
		)
	return <LoadingOrError />
}
