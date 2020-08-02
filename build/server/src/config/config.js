"use strict";

require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": "password",
    "database": "books",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "book_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};
//# sourceMappingURL=config.js.map