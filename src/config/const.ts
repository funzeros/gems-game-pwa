export const enum Numbers {
	true = 1,
	false = 0,
	zero = 0,
	half = 0.5,
	one = 1,
	two = 2,
	three = 3,
	four = 4,
	five = 5,
	ten = 10,
	twenty = 20,
	halfHundred = 50,
	hundred = 100,
	threeHundred = 300,
	thousand = 1000
}

export enum Tags {
	人,
	兽,
	灵,
	亡,
	火,
	木,
	水,
	冰,
	土,
	穴,
	金,
	风,
	光,
	暗,
	社
}

export const areaType = Object.freeze({
	forset: { label: '森林', tag: [Tags.木, Tags.人, Tags.兽, Tags.灵] },
	cave: { label: '洞穴', tag: [Tags.穴, Tags.暗, Tags.亡] },
	hill: { label: '山丘', tag: [Tags.人, Tags.土, Tags.兽] },
	lake: { label: '湖泊', tag: [Tags.水] },
	sea: { label: '海域', tag: [Tags.水] },
	plain: { label: '平原', tag: [Tags.风, Tags.土, Tags.人, Tags.兽] },
	highland: { label: '高原', tag: [Tags.风, Tags.土, Tags.人, Tags.兽] },
	iceField: { label: '冰原', tag: [Tags.冰] },
	village: { label: '村庄', tag: [Tags.人, Tags.金, Tags.社] },
	city: { label: '城邦', tag: [Tags.人, Tags.金, Tags.社] },
	town: { label: '城镇', tag: [Tags.人, Tags.金, Tags.社] }
})
export type AreaTypekeys = keyof typeof areaType
export const areaTypeKeys = Object.keys(areaType) as AreaTypekeys[]

export enum Species {
	人属,
	兽人,
	野兽,
	精灵,
	亡灵
}
export const biologyType = Object.freeze({
	人类: {
		label: '人类',
		species: Species.人属,
		tag: [Tags.人, Tags.土, Tags.木, Tags.社, Tags.金]
	},
	矮人: {
		label: '矮人',
		species: Species.人属,
		tag: [Tags.人, Tags.木, Tags.土]
	},
	巨人: {
		label: '巨人',
		species: Species.人属,
		tag: [Tags.人]
	},
	木精灵: {
		label: '木精灵',
		species: Species.精灵,
		tag: [Tags.土, Tags.木, Tags.灵]
	},
	风精灵: {
		label: '风精灵',
		species: Species.精灵,
		tag: [Tags.风, Tags.木, Tags.灵]
	},
	水精灵: {
		label: '水精灵',
		species: Species.精灵,
		tag: [Tags.水, Tags.灵]
	},
	雪人: {
		label: '雪人',
		species: Species.精灵,
		tag: [Tags.冰, Tags.灵]
	},
	地精: {
		label: '地精',
		species: Species.精灵,
		tag: [Tags.土, Tags.灵, Tags.金]
	},
	狼人: {
		label: '狼人',
		species: Species.兽人,
		tag: [Tags.人, Tags.兽, Tags.土]
	},
	翼人: {
		label: '翼人',
		species: Species.兽人,
		tag: [Tags.人, Tags.兽, Tags.风]
	},
	鱼人: {
		label: '鱼人',
		species: Species.兽人,
		tag: [Tags.人, Tags.兽, Tags.水]
	},
	狼: {
		label: '狼',
		species: Species.野兽,
		tag: [Tags.兽, Tags.土, Tags.木]
	},
	冰原狼: {
		label: '冰原狼',
		species: Species.野兽,
		tag: [Tags.兽, Tags.冰]
	},
	狮鹫: {
		label: '狮鹫',
		species: Species.野兽,
		tag: [Tags.兽, Tags.风]
	},
	巨齿鲨: {
		label: '巨齿鲨',
		species: Species.野兽,
		tag: [Tags.兽, Tags.水]
	},
	熊: {
		label: '熊',
		species: Species.野兽,
		tag: [Tags.兽, Tags.土, Tags.木]
	},
	虎: {
		label: '虎',
		species: Species.野兽,
		tag: [Tags.兽, Tags.土, Tags.木]
	},
	剑齿虎: {
		label: '剑齿虎',
		species: Species.野兽,
		tag: [Tags.兽, Tags.木]
	},
	黑熊: {
		label: '黑熊',
		species: Species.野兽,
		tag: [Tags.兽, Tags.木, Tags.土, Tags.暗]
	},
	白熊: {
		label: '白熊',
		species: Species.野兽,
		tag: [Tags.兽, Tags.木, Tags.土, Tags.冰, Tags.光]
	},
	蜘蛛: {
		label: '蜘蛛',
		species: Species.野兽,
		tag: [Tags.兽, Tags.穴]
	},
	洞穴蜘蛛: {
		label: '洞穴蜘蛛',
		species: Species.野兽,
		tag: [Tags.亡, Tags.穴, Tags.暗]
	},
	骷髅: {
		label: '骷髅',
		species: Species.亡灵,
		tag: [Tags.亡, Tags.穴, Tags.暗]
	},
	腐朽骷髅: {
		label: '腐朽骷髅',
		species: Species.亡灵,
		tag: [Tags.亡, Tags.穴, Tags.暗]
	},
	亡灵法师: {
		label: '亡灵法师',
		species: Species.亡灵,
		tag: [Tags.亡, Tags.暗]
	},
	陈尸: {
		label: '陈尸',
		species: Species.亡灵,
		tag: [Tags.亡, Tags.穴, Tags.暗]
	}
})
