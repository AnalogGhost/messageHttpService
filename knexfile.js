module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/messageHttpService'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
