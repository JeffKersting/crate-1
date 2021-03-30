import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';


describe('user queries', () => {
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

  it('returns all styles', async(done) => {
    const response = await request(server)
    .post('/')
    .send({query: `{styles {id name image gender type}}`})
    .expect(200)

    let expectation = response.body['data']['styles'].slice(0,3);//.range(3);

    expect(expectation).toEqual(
      [
        {
          "id": 24,
          "name": "Edgy",
          "image": "/images/survey/edgy-shoes-womens.jpg",
          "gender": 2,
          "type": "shoe"
        },
        {
          "id": 23,
          "name": "Edgy",
          "image": "/images/survey/edgy-accessory-womens.jpg",
          "gender": 2,
          "type": "accessory"
        },
        {
          "id": 22,
          "name": "Edgy",
          "image": "/images/survey/edgy-womens-bottom.jpg",
          "gender": 2,
          "type": "bottom"
        }
      ]
    )

    done();
  })
})
