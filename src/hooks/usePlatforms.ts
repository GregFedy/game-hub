import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import platforms from '../data/platforms'
import type Platform from '../entities/Platform'
import APIClient from '../services/api-client'

const apiClient = new APIClient<Platform>('/platforms')

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  })

export default usePlatforms
