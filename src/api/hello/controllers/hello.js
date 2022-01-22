module.exports = {
  async index(ctx, next) { // called by GET /hello
    console.log('qwe')
    ctx.body = 'Hello World!'; // we could also send a JSON
    return ctx.body;
  },
};
