import { useQuery } from 'react-query'
import { getRepositoryCommitsByName } from '../services/get-repository-commits-by-name'

export const useRepositoryCommits = (login: string, repository: string) => {
  const { data, error, isLoading } = useQuery(
    'userRepositoryCommits',
    async () => await getRepositoryCommitsByName(login, repository),
    { retry: false }
  )

  return { data, error, isLoading }
}
