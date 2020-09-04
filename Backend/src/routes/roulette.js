const router = require('express').Router();
const rouletteController = require('../controllers/roulette.controller.js');

router.route('/list').get(rouletteController.list);
router.route('/create').post(rouletteController.create);
router.route('/open/:id').put(rouletteController.open);

module.exports = router;