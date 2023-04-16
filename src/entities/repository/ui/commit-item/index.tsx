import { Commit } from 'entities/repository/model'
import { FC } from 'react'
import { getFormattedDate } from 'shared/lib/getFormattedDate'
import { Avatar } from 'shared/ui/avatar'

interface CommitItemProps {
  commit: Commit
}

export const CommitItem: FC<CommitItemProps> = ({ commit }) => {
  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex gap-2 items-center">
        <Avatar
          size="small"
          src={commit.author?.avatar_url}
          alt={commit.author?.login}
        />
        {commit.author?.login}
      </td>
      <td>{commit.sha}</td>
      <td>{getFormattedDate(new Date(commit.commit.committer.date))}</td>
    </tr>
  )
}
