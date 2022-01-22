'use strict';

/**
 *  todo controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo', ({strapi}) => ({
  async create(ctx) {
    ctx.request.body.data.user = ctx.state.auth.credentials.id
    const response = await super.create(ctx);
    return response;
  },

  async find(ctx) {
    let populate = "user"
    let filters = {
        "user": {
          "id": {
            "$eq": ctx.state.auth.credentials.id
          }
        }
    }

    const {data, meta} = await super.find({...ctx, query: {populate, filters}});

    return {data, meta};
  }
}));
