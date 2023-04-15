import { CommitList, useRepositoryCommits } from 'entities/repository'
import { BackHistoryButton } from 'features/back-history-button'
import { useParams } from 'react-router-dom'

const RepositoryCommits = () => {
  const { login, repository } = useParams() as {
    login: string
    repository: string
  }
  const { data: commitsData, isLoading } = useRepositoryCommits(
    login,
    repository
  )
  console.log(commitsData)
  if (isLoading) {
    return <div className="text-center">Loading...</div>
  }

  if (!commitsData) {
    return <div className="text-center">Commits not found!</div>
  }

  return (
    <div className="flex flex-col gap-4">
      <BackHistoryButton />
      <CommitList commits={commitsData} />
    </div>
  )
}
export default RepositoryCommits
