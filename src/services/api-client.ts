import axios from 'axios'

export type FetchResponse<T> = {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5e808b7b3f12497496d48d7f657d8509' // API KEY
  }
})
