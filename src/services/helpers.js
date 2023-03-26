const cardsModel = require('../models/cardsModel');

const validateReqBody = ({ name, linkedinURL, githubURL }) => {
  if (typeof name !== 'string' || name.length < 1) return null;
  if (typeof linkedinURL !== 'string' || linkedinURL.length < 1) return null;
  if (typeof githubURL !== 'string' || githubURL.length < 1) return null;

  return true;
};

module.exports = {
  validateReqBody,
};