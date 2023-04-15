import { Routing } from 'pages'
import { withProviders } from './providers'
import './styles/index.css'

const App = () => (
  <div className="p-8 h-full">
    <Routing />
  </div>
)

export default withProviders(App)
