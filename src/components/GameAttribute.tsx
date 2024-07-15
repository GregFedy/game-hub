import { Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  term: string
  children: ReactNode | ReactNode[]
}

const GameAttribute = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as='dt' fontSize='md' color='gray.600'>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  )
}

export default GameAttribute
