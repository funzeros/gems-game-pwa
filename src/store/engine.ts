import { Numbers } from 'config/const'
import { times } from 'lodash'
import { seedRandom } from 'utils'

const CharEnd = 40_869
const CharStart = 19_968

export class GenerEngine {
	public seed: number

	public constructor() {
		this.seed = Date.now()
		this.#random = seedRandom(this.seed)
	}

	#random: () => number

	public randomInteger(max: number, min = 0) {
		return Math.floor(this.#random() * (max - min)) + min
	}

	public getRandomCharacter() {
		const integer = this.randomInteger(CharEnd, CharStart)
		return String.fromCodePoint(integer)
	}

	public getRandomCharacters(length = Numbers.one) {
		let string = ''
		times(length, () => {
			string += this.getRandomCharacter()
		})
		return string
	}

	public getRandomByArray<T>(array: T[]): T {
		return array[this.randomInteger(array.length)]
	}

	public getRandomBool() {
		return this.#random() > Numbers.half
	}
}
export const engine = new GenerEngine()
