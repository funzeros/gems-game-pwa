import { Basic } from './base'

export class Block extends Basic {
	public x = 0

	public y = 0

	public constructor(opt: Partial<Block>) {
		super()
		const { x, y } = { x: 0, y: 0, ...opt }
		this.x = x
		this.y = y
	}

	public static create(opt: Partial<Block>) {
		const { id, ...item } = new Block(opt)
		return item
	}
}
