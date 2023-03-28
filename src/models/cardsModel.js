const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async ({ name, linkedinURL, githubURL }) => {
  const query = { name, linkedinURL, githubURL };
  const db = await connection();
  const { insertedId } = await db.collection('cards').insertOne(query);
  return insertedId;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const cards = await db.collection('cards').findOne({ _id: new ObjectId(id) });
  return cards;
};

module.exports = {
  create,
  getById,
};