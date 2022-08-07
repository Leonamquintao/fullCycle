const assert = require('assert');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { DB_HOST, DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, DB_PORT } =
  process.env;

assert(
  DB_HOST,
  'DB_HOST is required use localhost if your in local development!'
);
assert(DB_USER_NAME, 'DB_USER_NAME is required!');
assert(DB_USER_PASSWORD, 'DB_USER_PASSWORD is required!');
assert(DB_NAME, 'DB_NAME is required!');
assert(DB_PORT, 'DB_PORT is required!');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: DB_USER_NAME,
      password: DB_USER_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
      charset: 'utf8',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
};
