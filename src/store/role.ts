import { Numbers } from 'config/const'
import { Basic } from './base'
import { engine } from './engine'

export class Biology extends Basic {
	public isPlayer = 0

	public blockId = 0

	public buildingId = 0

	public type = ''

	public name = ''

	public level = 0

	public favorability = 0

	public hp = 0

	public isDead = 0

	protected constructor(opt: Partial<Biology>) {
		super()
		const { name, isPlayer, blockId } = {
			name: '',
			isPlayer: 0,
			blockId: 0,
			...opt
		}
		this.name = name
		this.isPlayer = isPlayer
		this.blockId = blockId
	}

	public static createPlayer(blockId: number) {
		const { id, ...item } = new Biology({
			name: engine.getRandomCharacters(
				engine.randomInteger(Numbers.five, Numbers.two)
			),
			isPlayer: Numbers.true,
			blockId
		})
		return item
	}
}
