import { apiInstance } from 'shared/api'

export const getRepositoriesByUser = async (login: string) => {
  const response = await apiInstance.get(`users/${login}/repos`)
  return response.data
}
