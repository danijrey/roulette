const Roulette = require('../models/roulette.model.js');
const Bet = require('../models/bet.model.js');

module.exports = {

  async bet(req, res) {
    try {
      const rouletteID  = req.params.id;
      const data = req.body;
      const userID = parseInt(req.headers.id);

      
      //validar ruleta abierta
      /* const roulette = await Roulette.findById({rouletteID}); */
      
      const bet = await Bet.create({userID, rouletteID, ...data});
      
      res.status(200).json(bet);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async close(req, res) {
    try {
      const { id } = req.params;
      const roulette = await Roulette.findByIdAndUpdate(id, {status: 'close'});
      const bet = await Bet.findById(id);
      // devolver las 
      //apuestas que se realizaron desde la apertura hasta el cierre
      res.status(200).json(roulette);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
