const router = require('express').Router();
const betController = require('../controllers/bet.controller.js');

router.route('/:id/bet').post(betController.bet);
router.route('/:id/close').put(betController.close);


module.exports = router;