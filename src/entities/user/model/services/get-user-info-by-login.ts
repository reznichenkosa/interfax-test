import { apiInstance } from 'shared/api'
import { GitHubUser } from '../types/user'

export const getUserInfoByLogin = async (login: string) => {
  const response = await apiInstance.get<GitHubUser>(`users/${login}`)
  return response.data
}
