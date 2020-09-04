const Roulette = require('../models/roulette.model.js');
const Bet = require('../models/bet.model.js');

module.exports = {
  async bet(req, res) {
    try {
      const rouletteID  = req.params.id;
      const data = req.body;
      const userID = parseInt(req.headers.id);
      const roulette = await Roulette.findById({_id: req.params.id}); 
      if ( roulette.status  != 'open'){
        res.status(400).json({ message: 'La ruleta se debe abrir antes de realizar apuestas' });
      }else{
        if (data.color === 'Negro' || data.color === 'Rojo'){
          const bet = await Bet.create({ userID, rouletteID, ...data });
          res.status(200).json(bet);
        }else{
          res.status(400).json({ message: 'El color debe ser Rojo o Negro' });
        }
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async close(req, res) {
    try {
      const roulette = await Roulette.findById({ _id: req.params.id });
      const bet = await Bet.find({ rouletteID: req.params.id, createdAt: {$lt: roulette.updatedAt}});
      const rouletteClose = await Roulette.findByIdAndUpdate({ _id: req.params.id, status: 'close' });  
      res.status(200).json(bet);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
