require('dotenv').config();
module.exports = 
{
  "development": {
    "username": "steven",
    "password": null,
    "database": "books",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "steven",
    "password": null,
    "database": "book_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "steven",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
