import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'

export const SearchUserByLogin = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Enter user login..." />
      <Button>Search</Button>
    </div>
  )
}
