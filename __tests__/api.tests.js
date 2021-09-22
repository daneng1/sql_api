'use strict';

const { DESCRIBE } = require('sequelize/types/lib/query-types');
const server = require('../app/server');
const request = supertest(server);

let data = [
  { name: 'Doug', email: 'doug@test.com' },
  { name: 'Susie', email: 'susy@test.com' },
  { name: 'Mary', email: 'mary@test.com' }
]

DESCRIBE('API router', () => {
  it('should successfully connect to the database and retrieve all data', () => {

  })
});