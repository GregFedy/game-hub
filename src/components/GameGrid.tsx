import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Fragment } from 'react/jsx-runtime'
import { type GameQuery } from '../App'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

type Props = {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery)

  const skeletons = [1, 2, 3, 4, 5, 6]

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  if (error) return <Text>{error.message}</Text>

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <Box display='flex' justifyContent='center' py={4}>
          <Spinner size='xl' />
        </Box>
      }
      endMessage={
        <Box display='flex' justifyContent='center' py={4}>
          <Text>No more games to load</Text>
        </Box>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding='10px'
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default GameGrid
