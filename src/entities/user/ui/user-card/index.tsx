import { GitHubUser } from 'entities/user/model'
import { FC } from 'react'
import { Avatar } from 'shared/ui/avatar'
import { Card } from 'shared/ui/card'

interface UserCardProps {
  user: GitHubUser
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <div className="flex flex-col gap-2 items-center">
        <Avatar src={user.avatar_url} alt={user.name} />
        <div className="flex flex-col w-full">
          <span className="font-bold text-2xl text-gray-700">{user.login}</span>
          <span>{user.name}</span>
        </div>
      </div>
    </Card>
  )
}
