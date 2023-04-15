import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./home'))
const ProfilePage = lazy(() => import('./profile'))
const RepositoriesPage = lazy(() => import('./repositories'))
const RepositoriesDetailsPage = lazy(() => import('./repositories-details'))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/repositories" element={<RepositoriesPage />} />
      <Route
        path="/profile/repositories/:id"
        element={<RepositoriesDetailsPage />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
