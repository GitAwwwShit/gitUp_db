var dotenv = require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gitUp',
    migrations: {tableNanme: 'knex_migrations'}
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {tableNanme: 'knex_migrations'},
    pool: {
      min: 2,
      max: 10
    }
  }

};
