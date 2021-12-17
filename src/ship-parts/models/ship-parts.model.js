const moongose = require('mongoose');

const shipPartsSchema = new moongose.Schema({
    health: String,
    ranking: Number,
    modifiers: [{}],
});

const ShipParts = moongose.model('ShipParts', shipPartsSchema);
module.exports = ShipParts;