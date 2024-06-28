import { type GameQuery } from '../App'
import useData from './useData'

export type Platform = {
  id: number
  name: string
  slug: string
}

export type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      }
    },
    [gameQuery]
  )

export default useGames
