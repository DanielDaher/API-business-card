const router = require("express").Router();
const cardsController = require('../controllers/cardsController');

router.post('/', cardsController.create);

module.exports = router;