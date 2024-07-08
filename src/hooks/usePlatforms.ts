import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiClient, { type FetchResponse } from '../services/api-client'
import { type Platform } from './useGames'

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }
  })

export default usePlatforms
