import { Routing } from 'pages'
import { withProviders } from './providers'
import './styles/index.css'

const App = () => (
  <div className="p-8 flex max-w-7xl m-auto min-h-screen">
    <Routing />
  </div>
)

export default withProviders(App)
