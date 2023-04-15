import { useQuery } from 'react-query'
import { getUserInfoByLogin } from '../services/get-user-info-by-login'

export const useUserProfile = (login: string) => {
  const { data, error, isLoading } = useQuery(
    `userProfile${login}`,
    async () => await getUserInfoByLogin(login),
    { retry: false }
  )

  return { data, error, isLoading }
}
