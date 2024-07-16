import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const limit = 300

  if (!children) return null

  if (children.length <= limit) {
    return <Text>{children}</Text>
  }

  const summary = expanded ? children : children.substring(0, 300) + '...'

  return (
    <div>
      <Text as='span'>{summary}</Text>
      <Button
        size='xs'
        fontWeight='bold'
        colorScheme='yellow'
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Show more'}
      </Button>
    </div>
  )
}

export default ExpandableText
