import { Spinner } from '@chakra-ui/react'
import useTrailers from '../hooks/useTrailers'

type Props = {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId)

  if (isLoading) return <Spinner size={'lg'} />

  if (error) throw error

  const firstTrailer = trailers?.results[0]

  return firstTrailer ? (
    <video
      src={firstTrailer.data['480']}
      poster={firstTrailer.preview}
      controls
    />
  ) : null
}

export default GameTrailer
