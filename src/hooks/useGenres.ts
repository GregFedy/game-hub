import useData from './useData'

export type Genre = {
  id: number
  name: string
}

const useGenres = () => useData<Genre>('/genres')
  

export default useGenres