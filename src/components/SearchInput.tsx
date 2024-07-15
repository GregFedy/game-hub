import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import useGameQueryStore from '../store/store'

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setSearch = useGameQueryStore((s) => s.setSearch)
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (inputRef.current) {
          setSearch(inputRef.current.value)
          navigate('/')
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
