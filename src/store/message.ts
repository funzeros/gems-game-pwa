import { Basic } from './base'

export class MessageItem extends Basic {
	public attach: Record<string, string>[] = []

	public sounder: string

	public content: string

	protected constructor(
		sounder: string,
		content: string,
		attach?: Record<string, string>[]
	) {
		super()
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
