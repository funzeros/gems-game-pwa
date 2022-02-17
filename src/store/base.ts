export class Basic {
	public id = 0

	public createTime = Date.now()

	public static genField<T>(ins: T) {
		return `++${Object.keys(ins).join(',')}`
	}

	public static getField() {
		return this.genField(new this())
	}
}
