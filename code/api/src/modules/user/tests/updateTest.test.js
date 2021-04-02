import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';


describe('user update mutations', () => {
  let server = express();

  beforeAll(() => {
    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false
        })
      )
    });

  it('sends a mutation and returns 200 status', async(done) => {
    const mutation = ` mutation {
      userUpdate(id: 1, style: "fluffy") {
        id
        style
      }
    }`;
    const response = await request(server)
    .post('/')
    .set('content-type', 'application/json')
    .send({query: mutation})
    .expect(200)

    done();
  })
})
