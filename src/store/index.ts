import { createModel } from 'hox'
import { initPlayer } from './api'
import { initDatabse } from './databse'

export * from './block'
export * from './building'
export * from './message'
export * from './role'

function useStore() {
	initDatabse()
	void initPlayer()
	return {}
}

export const useStoreModel = createModel(useStore)
