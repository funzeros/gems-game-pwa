import { Basic } from './base'

const enum MessageItemEnum {
	basic
}

export class MessageItem extends Basic {
	public attach: Record<string, string>[] = []

	public sounder: string

	public content: string

	public level = 0

	public type: keyof typeof MessageItemEnum = 'basic'

	protected constructor(
		sounder = '',
		content = '',
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
