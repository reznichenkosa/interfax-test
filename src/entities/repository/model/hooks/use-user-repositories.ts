import { useQuery } from 'react-query'
import { getRepositoriesByUser } from '../services/get-repositories-by-user'

export const useUserRepositories = (login: string) => {
  const { data, error, isLoading } = useQuery(
    'userRepositories',
    async () => await getRepositoriesByUser(login),
    { retry: false }
  )

  return { data, error, isLoading }
}
