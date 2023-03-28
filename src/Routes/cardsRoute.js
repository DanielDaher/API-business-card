const router = require("express").Router();
const cardsController = require('../controllers/cardsController');

router.post('/', cardsController.create);
router.get('/:id', cardsController.getById);

module.exports = router;