import { useQuery } from 'react-query'
import { getRepositoriesByUser } from './services/get-repositories-by-user'
import { getRepositoryCommitsByName } from './services/get-repository-commits-by-name'

export const useUserRepositories = (login: string) => {
  const { data, error, isLoading } = useQuery(
    'userRepositories',
    async () => await getRepositoriesByUser(login)
  )

  return { data, error, isLoading }
}

export const useRepositoryCommits = (login: string, repository: string) => {
  const { data, error, isLoading } = useQuery(
    'userRepositoryCommits',
    async () => await getRepositoryCommitsByName(login, repository)
  )

  return { data, error, isLoading }
}
