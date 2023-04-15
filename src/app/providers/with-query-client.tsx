import { QueryClientProvider } from 'react-query'
import { queryClient } from 'shared/api'

export const withQueryClient = (component: () => React.ReactNode) => () =>
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
