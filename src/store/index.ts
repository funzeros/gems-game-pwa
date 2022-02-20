import { createModel } from 'hox'
import { initDatabse } from './databse'

export * from './block'
export * from './building'
export * from './message'
export * from './role'

function useStore() {
	initDatabse()
	return {}
}

export const useStoreModel = createModel(useStore)
