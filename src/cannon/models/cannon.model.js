const moongose = require('mongoose');

const cannonSchema = new moongose.Schema({
    nome: String,
    damage: Number,
    ranking: Number,
    range: Number,
    modifiers: [{}],
});

const Cannon = moongose.model('Cannon', cannonSchema);
module.exports = Cannon;