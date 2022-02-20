import { areaTypeKeys } from 'config/const'
import { Basic } from './base'
import { engine } from './engine'

export class Building extends Basic {
	public blockId = 0

	public hasExplored = 0

	public hasCompeleted = 0

	public favorability = 0

	public type: string

	public constructor(opt: Partial<Building>) {
		super()
		const { blockId } = { blockId: 0, ...opt }
		this.blockId = blockId
		this.type = engine.getRandomByArray(areaTypeKeys)
	}

	public static create(opt: Partial<Building>) {
		const { id, ...item } = new Building(opt)
		return item
	}
}
