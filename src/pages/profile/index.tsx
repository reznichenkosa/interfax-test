import { useParams } from 'react-router-dom'

import { ProjectList, useUserRepositories } from 'entities/repository'
import { UserCard, useUserProfile } from 'entities/user'

const Profile = () => {
  const { login } = useParams() as { login: string }
  const { data: userData, isLoading } = useUserProfile(login)
  const { data: repositoriesData, isLoading: isRepositoriesLoading } =
    useUserRepositories(login)

  if (isLoading || isRepositoriesLoading) {
    return <div className="text-center">Loading...</div>
  }

  if (!userData) {
    return <div className="text-center">User not found!</div>
  }

  return (
    <div className="grid grid-cols-[400px_1fr] gap-4">
      <UserCard user={userData} />
      <ProjectList projects={repositoriesData || []} />
    </div>
  )
}
export default Profile
