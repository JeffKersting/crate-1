// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
// Defines query to get all users with UserType and resolves to getAll to execute query
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
// Defines Query to get one user with UserType by id and resolves to getbyID to execute query
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
// Defines query to login user with UserType and resolves to login to execute query
// Query accepts email, password, and role
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
// Defines query to get user genders with userGenderType and resolves to getGenders to execute query
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}

