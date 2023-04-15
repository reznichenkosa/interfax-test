import { apiInstance } from 'shared/api'

export const getRepositoryCommitsByName = async (
  login: string,
  repository: string
) => {
  const response = await apiInstance.get(`repos/${login}/${repository}/commits`)
  return response.data
}
