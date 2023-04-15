import { apiInstance } from 'shared/api'
import { Project } from '../types/project'

export const getRepositoriesByUser = async (login: string) => {
  const response = await apiInstance.get<Project[]>(`users/${login}/repos`)
  return response.data
}
