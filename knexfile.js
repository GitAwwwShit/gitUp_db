var dotenv = require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/gitUp'
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
