module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/hello',
      handler: 'hello.index',
    }
  ],
  config: {
    find: {
      auth: false
    },
    findOne: {auth: false},
  }
}
