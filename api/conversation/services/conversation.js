'use strict';

module.exports = {
  async create(data) {
    return strapi.query('conversation').create(data);
  },
  async find(params, populate) {
    return strapi.query('conversation').find(params, populate);
  },
  async findOne(params, populate) {
    return strapi.query('conversation').findOne(params, populate);
  },
  async update(params, data, { files } = {}) {
    return strapi.query('conversation').update(params, data, { files });
  },
  async delete(params) {
    return strapi.query('conversation').delete(params);
  },
};

