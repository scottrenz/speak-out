require('dotenv').config();

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       port: process.env.DB_PORT,
//       host: process.env.DB_HOST,
//       database: process.env.DB_DB,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS
//     },
//     production: {
//       client: 'postgresql',
//       connection: {
//         port: process.env.DB_PORT,
//         host: process.env.DB_HOST,
//         database: process.env.DB_DB,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS
//         },
//       pool: {
//       min: process.env.DATABASE_POOL_MIN,
//       max: process.env.DATABASE_POOL_MAX,
//     },
//     migrations: {
//       directory: './db/migrations',
//       tableName: 'knex_migrations',
//     },
//     seeds: {
//       directory: './db/seeds',
//     },
//   }
// }

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: "speakoutstaging.cswncgslisak.us-east-1.rds.amazonaws.com",
      database: "speakout",
      user: "postgres",
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
