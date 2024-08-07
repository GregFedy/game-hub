import { Image, SimpleGrid } from '@chakra-ui/react'
import useScreenshots from '../hooks/useScreenshots'

type Props = {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {screenshots?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.image}
        />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots
