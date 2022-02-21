import { areaType, Numbers } from 'config/const'
import { useLiveQuery } from 'dexie-react-hooks'
import type { ReactElement } from 'react'
import { useMemo } from 'react'
import type { Block, Building } from 'store'
import { changeExporeValue, exploreBuilding, usePlayer } from 'store/api'
import { database } from 'store/databse'
import { engine } from 'store/engine'
import { useLoading, wait } from 'utils'
import LoadingOrError from './LoadingOrError'

export default function BlockCollapse(): ReactElement {
	const [player] = usePlayer()
	const block = useLiveQuery<Block>(
		async () => database.block.get({ id: player?.blockId ?? 0 }),
		[player?.blockId]
	)
	const buildings = useLiveQuery<Building[]>(
		async () => database.building.where({ blockId: block?.id ?? 0 }).toArray(),
		[block?.id]
	)
	const exploredData = useMemo(() => {
		if (buildings) {
			const explorderBuildings = buildings.filter(
				({ hasExplored }) => hasExplored
			)
			const rate = (
				(explorderBuildings.length / buildings.length) *
				Numbers.hundred
			).toFixed(Numbers.two)
			return { buildings: explorderBuildings, rate: `${rate}%` }
		}
		return { buildings: [], rate: '0%' }
	}, [buildings])
	const [exploreLoading, onExplore] = useLoading(async () => {
		if (!(buildings && block)) return
		await changeExporeValue(block.id, block.exploreValue - Numbers.ten)
		const notExploredBuildings = buildings.filter(
			({ hasExplored }) => !hasExplored
		)
		if (
			exploredData.buildings.length === 0 ||
			(notExploredBuildings.length > 0 && engine.getRandomBool())
		) {
			const item = engine.getRandomByArray(notExploredBuildings)
			await exploreBuilding(item.id)
		} else {
			// 可获得其他奖励
			log('给予其他奖励')
		}
		await wait(Numbers.threeHundred)
	})

	if (player && block && buildings)
		return (
			<div className=' relative flex h-full w-full flex-col  bg-white'>
				<div className=' border-gray-200 p-2 text-xs leading-4 text-gray-600 shadow-lg'>
					<div className='flex items-center justify-between'>
						<div>
							区域坐标:{block.x},{block.y}
						</div>
						<div className=''>该区域已探索{exploredData.rate}</div>
					</div>
					<div className='flex items-center justify-between'>
						<div>
							探索值:{block.exploreValue}/{Numbers.ten}
						</div>
					</div>
				</div>
				<div className=' flex-1 overflow-y-auto overflow-x-hidden'>
					{exploredData.buildings.map(({ name, id, type, favorability }) => (
						<div key={id} className=' border-b-2 p-2'>
							<span className=' inline-block w-24'>{name}</span>
							<span className=' inline-block w-16 text-sm'>
								[{areaType[type].label}]
							</span>
							<span
								className={`text-sm ${
									favorability
										? favorability > 0
											? 'text-green-500'
											: 'text-red-500'
										: 'text-yellow-500'
								}`}
							>
								好感度:{favorability}
							</span>
							<span className=' float-right inline-block cursor-pointer rounded-full bg-blue-400 px-2 text-sm leading-6 text-white ring-2 active:ring-4'>
								逛逛
							</span>
						</div>
					))}
				</div>
				{block.exploreValue >= Numbers.ten && (
					<div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<button
							type='button'
							disabled={exploreLoading}
							className=' relative animate-bounce rounded-full bg-yellow-50 bg-opacity-75 px-6 py-2 text-lg text-yellow-500  shadow-lg shadow-yellow-900 ring-4 ring-yellow-300'
							onClick={onExplore}
						>
							{exploreLoading
								? '探索中...'
								: `可探索${Math.trunc(block.exploreValue / Numbers.ten)}次`}
						</button>
					</div>
				)}
			</div>
		)
	return <LoadingOrError inner />
}
