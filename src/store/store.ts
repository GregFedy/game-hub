import { create } from 'zustand'

type GameQuery = {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText?: string
}
interface GameQueryStore {
  gameQuery: GameQuery
  setSearch: (searchText: string) => void
  setSelectGenre: (genreId: number) => void
  setSelectPlatform: (platformId: number) => void
  setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearch: (searchText: string) =>
    set(() => ({
      gameQuery: { searchText }
    })),
  setSelectGenre: (genreId: number) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId }
    })),
  setSelectPlatform: (platformId: number) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId }
    })),
  setSortOrder: (sortOrder: string) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder }
    }))
}))

export default useGameQueryStore
