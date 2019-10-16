
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: "speakoutstaging.cswncgslisak.us-east-1.rds.amazonaws.com",
      database: "speakout",
      user: "postgres",
      password: "speakoutaws"
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
