// Imports graphql
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports user types & resolves
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
// graphQL mutatation defined to create new user under user type
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
    // Add mutation to update user style. Default NULL
  },
  resolve: create
}

// Remove
// graphQL mutatation defined to delete user under user type
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Add mutation to update user style. 

// export const userStyleUpdate = {
//   type: UserType,
//   args: {
//     style: {
//       style: 'style',
//       type: GraphQLString
//     }
//   },
//   resolve: update
// }