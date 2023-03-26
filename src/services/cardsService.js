const cardsModel = require('../models/cardsModel');
const { validateReqBody } = require('./helpers');

const create = async ({ name, linkedinURL, githubURL }) => {
  const validReqBody = validateReqBody({ name, linkedinURL, githubURL });
  if (!validReqBody) return { statusCode: 400, responseMessage: 'Invalid request' };

  const insert = await cardsModel.create({ name, linkedinURL, githubURL });
  return { responseMessage: insert, statusCode: 201 };
};

module.exports = {
  create,
};