import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-urls'
import useGameQueryStore from '../store/store'

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId)
  const setSelectGenre = useGameQueryStore((s) => s.setSelectGenre)

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant='link'
                fontSize='lg'
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre?.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => setSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
