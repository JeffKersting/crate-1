// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Style Type
const StyleType = new GraphQLObjectType({
  name: 'style',
  description: 'Style Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    gender: { type: GraphQLInt },
    type: { type: GraphQLString }
  })
})

export default StyleType