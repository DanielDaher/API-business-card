const cardsService = require('../services/cardsService');

const create = async (req, res) => {
  try {
    const { name, linkedinURL, githubURL } = req.body;
    const insert = await cardsService.create({ name, linkedinURL, githubURL });
  
    res.status(insert.statusCode).json(insert.responseMessage);
  } catch (error) {
    console.error(error);
    res.status(400).json('error, try again latter');
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await cardsService.getById(id);

    res.status(card.statusCode).json(card.responseMessage);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'error, try again latter' });
  }
};

module.exports = {
  create,
  getById,
};