import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from 'shared/ui/loader'

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-full flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  )
