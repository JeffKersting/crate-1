import { setUser }  from '../actions';

describe('actions', () => {
  it('should have a type of SET_USER', () => {
    const token = 'testToken'
    const user = {
        id: 3,
        name: 'test',
        email: 'test@email.com',
        password: 'password',
        role: 'USER',
        style: 'NULL'
    }
    const expectedAction = {
        type: 'AUTH/SET_USER',
        user
    }
    const result = setUser(token, user)
    
    expect(result).toEqual(expectedAction)
  });
});