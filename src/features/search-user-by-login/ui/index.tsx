import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

export const SearchUserByLogin = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const navigate = useNavigate()

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchClick = () => {
    navigate(`/${searchQuery}`)
  }

  return (
    <div className="flex gap-2">
      <Input
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Enter GitHub account..."
      />
      <Button onClick={handleSearchClick}>Search</Button>
    </div>
  )
}
