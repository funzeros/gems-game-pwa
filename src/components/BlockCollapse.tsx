import { useLiveQuery } from 'dexie-react-hooks'
import type { ReactElement } from 'react'
import type { Block, Building } from 'store'
import { usePlayer } from 'store/api'
import { database } from 'store/databse'
import LoadingOrError from './LoadingOrError'

export default function BlockCollapse(): ReactElement {
	const [player] = usePlayer()
	const block = useLiveQuery<Block>(
		async () => database.block.get({ id: player?.blockId ?? 0 }),
		[player?.blockId]
	)
	const buildings = useLiveQuery<Building>(
		async () => database.building.get({ blockId: block?.id ?? 0 }),
		[block?.id]
	)
	if (player && block)
		return (
			<div className=' relative h-full'>
				<div className=' absolute top-0 right-0 leading-4'>
					{block.x},{block.y}
				</div>
				{buildings ? <div>{buildings.id}</div> : <div>1</div>}
			</div>
		)
	return <LoadingOrError />
}
