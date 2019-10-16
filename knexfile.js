
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: process.env.DB_HOST,
      database: process.env.DB_DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  }
}
