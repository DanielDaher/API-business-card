const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async ({ name, linkedinURL, githubURL }) => {
  const query = { name, linkedinURL, githubURL };
  const db = await connection();
  await db.collection('cards').insertOne(query);
  return 'card created successfully';
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const cards = await db.collection('cards').findOne(ObjectId(id));
  return cards;
};

module.exports = {
  create,
  getById,
};