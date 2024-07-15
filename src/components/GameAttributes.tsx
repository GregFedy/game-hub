import { SimpleGrid, Text } from '@chakra-ui/react'
import type Game from '../entities/Game'
import CriticScore from './CriticScore'
import GameAttribute from './GameAttribute'

type Props = {
  game: Game
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
      <GameAttribute term='Platforms'>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute term='Metascore'>
        <CriticScore score={game.metacritic} />
      </GameAttribute>
      <GameAttribute term='Genres'>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameAttribute>
    </SimpleGrid>
  )
}

export default GameAttributes
