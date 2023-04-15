import { Commit } from 'entities/repository/model'
import { FC } from 'react'
import { CommitItem } from '../commit-item'
interface CommitListPros {
  commits: Commit[]
}

export const CommitList: FC<CommitListPros> = ({ commits }) => {
  return (
    <div className="w-full">
      {commits.length === 0 && (
        <div className="text-center">Public commits not found...</div>
      )}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">'>
          <tr>
            <th className="px-6 py-3">Author</th>
            <th className="px-6 py-3">Hash</th>
            <th className="px-6 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {commits.map((commit) => (
            <CommitItem key={commit.sha} commit={commit} />
          ))}
        </tbody>
      </table>
      ​
    </div>
  )
}
