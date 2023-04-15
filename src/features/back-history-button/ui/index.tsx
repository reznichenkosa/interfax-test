import { useNavigate } from 'react-router-dom'
import { Button } from 'shared/ui/button'

export const BackHistoryButton = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return <Button onClick={handleBackClick}>Back</Button>
}
