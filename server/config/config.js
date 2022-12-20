const keys=require("./keys")
module.exports = {
  development: {
    username: keys.development.username,
    password: keys.development.password,
    database: keys.development.database,
    host: keys.development.host,
    dialect: "mysql",
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeSeedData",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: keys.production.username,
    password: keys.production.password,
    database:keys.production.database,
    host: keys.production.host,
    dialect: "mysql",
  },
};
