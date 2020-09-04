const { Schema, model, models } = require('mongoose');


const betSchema = new Schema(
  {
    userID: {
      type: String,
      required: [true, 'User ID is required']
    }, 
    rouletteID: {
      type: String,
      required: [true, 'Roulette ID is required']
    },
    num: {
      type: Number,
      required: [true, 'the number is a required field'],
      min: 0,
      max: 36
    },
    color: {
      type: String,
      required: [true, 'The color is a required field'],
    },
    amount: {
      type: Number,
      required: [true, 'The amount is a required field'],
      max: 10000
    },
  },
  {
    timestamps: true,
  }
);

const Bet = model('Bet', betSchema);

module.exports = Bet;