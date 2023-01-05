const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const starSchema =  new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    constellations: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Constellation"
        }
      ]
},{
    timestamps:true
});

const Star = mongoose.model('Star', starSchema);

module.exports = Star;