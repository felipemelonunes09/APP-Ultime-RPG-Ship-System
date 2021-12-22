const moongose = require('mongoose');

const shipPartsSchema = new moongose.Schema({
    health: { type: Number, required: true },
    ranking: { type: Number, required: true },
    modifiers: [{}],
});

const ShipParts = moongose.model('ShipParts', shipPartsSchema);
module.exports = ShipParts;