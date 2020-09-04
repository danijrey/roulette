const { Schema, model, models } = require('mongoose');


const rouletteSchema = new Schema(
  {
    status: {
      type: String,
      required: [true]
    }
  },
  {
    timestamps: true,
  }
);
const Roulette = model('Roulette', rouletteSchema);

module.exports = Roulette;
