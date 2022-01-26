require('dotenv').config()

module.exports = {
  "type": "postgres",
  "port": process.env.DB_PORT,
  "host": process.env.DB_HOST,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
  "entities": ["./src/modules/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}