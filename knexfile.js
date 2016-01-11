var dotenv = require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    },
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
