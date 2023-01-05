const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const constellationSchema =  new Schema({

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
    stars: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Star"
        }
      ]
},{
    timestamps:true
});

const Constellation = mongoose.model('Constellation', constellationSchema);
 
module.exports = Constellation;