import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./home'))
const ProfilePage = lazy(() => import('./profile'))
const RepositoryCommitsPage = lazy(() => import('./repository-commits'))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:login" element={<ProfilePage />} />
      <Route
        path="/:login/:repository/commits"
        element={<RepositoryCommitsPage />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
