import compose from 'compose-function'
import { withRouter } from './with-router'
import { withQueryClient } from './with-query-client'

export const withProviders = compose(withRouter, withQueryClient)
