import { Numbers } from 'config/const'
import { times } from 'lodash'
import { seedRandom } from 'utils'

const CharEnd = 40_869
const CharStart = 19_968

export class GenerEngine {
	public seed: number

	protected constructor(seed: number) {
		this.seed = seed
		this.#random = seedRandom(seed)
	}

	#random: () => number

	#randomInteger(max: number, min = 0) {
		return Math.floor(this.#random() * (max - min)) + min
	}

	#getRandomCharacter() {
		const integer = this.#randomInteger(CharEnd, CharStart)
		return String.fromCodePoint(integer)
	}

	public getRandomCharacters(length = Numbers.one) {
		let string = ''
		times(length, () => {
			string += this.#getRandomCharacter()
		})
		return string
	}
}
