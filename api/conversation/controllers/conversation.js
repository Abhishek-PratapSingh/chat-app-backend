'use strict';

module.exports = {
  async find(ctx) {
    const { identifier } = ctx.query;
    if(!identifier ) return null;

    const messages = await strapi.services.conversation.find({
      identifier : identifier 
    });
    return messages;
  }
};
