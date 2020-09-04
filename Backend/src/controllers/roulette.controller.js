const Roulette = require('../models/roulette.model.js');
const Bet = require('../models/bet.model.js');

module.exports = {
  async list(req, res) {
    try {
      const roulette = await Roulette.find();
      res.status(200).json(roulette);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const roulette = await Roulette.create({status: 'close'});
      res.status(200).json(roulette.id);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async open(req, res) {
    try {
      const { id } = req.params;
      const roulette = await Roulette.findByIdAndUpdate(id, {status: 'open'});
      res.status(200).json({ message: 'La ruleta se encuentra abierta' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
};
