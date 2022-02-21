import type { AreaTypekeys } from 'config/const'
import { areaTypeKeys, Numbers } from 'config/const'
import { Basic } from './base'
import { engine } from './engine'

export class Building extends Basic {
	public blockId = 0

	public hasExplored = 0

	public hasCompeleted = 0

	public favorability = 0

	public type: AreaTypekeys

	public name: string

	public constructor(opt: Partial<Building>) {
		super()
		const { blockId } = { blockId: 0, ...opt }
		this.blockId = blockId
		this.type = engine.getRandomByArray(areaTypeKeys)
		this.name = engine.getRandomCharacters(
			engine.randomInteger(Numbers.five, Numbers.two)
		)
	}

	public static create(opt: Partial<Building>) {
		const { id, ...item } = new Building(opt)
		return item
	}
}
