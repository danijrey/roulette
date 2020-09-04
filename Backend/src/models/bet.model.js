const { Schema, model, models } = require('mongoose');


const betSchema = new Schema(
  {
    userID: {
      type: String,
      required: [true, 'Id de Ususario es requerido']
    }, 
    rouletteID: {
      type: String,
      required: [true, 'Id de Ruleta es requerido']
    },
    num: {
      type: Number,
      required: [true, 'Número es un campo requerido'],
      min: 0,
      max: 36
    },
    color: {
      type: String,
      required: [true, 'Color es un campo requerido'],
    },
    amount: {
      type: Number,
      required: [true, 'Monto es un campo requerido'],
      max: 10000
    },
  },
  {
    timestamps: true,
  }
);
const Bet = model('Bet', betSchema);
module.exports = Bet;