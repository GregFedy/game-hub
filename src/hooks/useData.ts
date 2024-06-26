import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'

type FetchResponse<T> = {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'CanceledError') {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return { data, error, isLoading }
}

export default useData