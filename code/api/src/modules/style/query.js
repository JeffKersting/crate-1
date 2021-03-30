// Imports
import { GraphQLList } from 'graphql'

// App Imports
import StyleType from './types'
import { getAll } from './resolvers'

// Products All
export const styles = {
  type: new GraphQLList(StyleType),
  resolve: getAll
}