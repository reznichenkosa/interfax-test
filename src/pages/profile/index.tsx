import { useParams } from 'react-router-dom'

import { ProjectList, useUserRepositories } from 'entities/repository'
import { UserCard, useUserProfile } from 'entities/user'
import { BackHistoryButton } from 'features/back-history-button'
import { Loader } from 'shared/ui/loader'

const Profile = () => {
  const { login } = useParams() as { login: string }

  const { data: userData, isLoading } = useUserProfile(login)
  const { data: repositoriesData, isLoading: isRepositoriesLoading } =
    useUserRepositories(login)

  if (isLoading || isRepositoriesLoading) {
    return (
      <div className="flex-grow flex justify-center items-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 flex-grow">
      <BackHistoryButton />
      {userData ? (
        <div className="grid grid-cols-[400px_1fr] gap-4">
          <UserCard user={userData} />
          <ProjectList projects={repositoriesData || []} />
        </div>
      ) : (
        <div className="text-center">User not found!</div>
      )}
    </div>
  )
}
export default Profile
