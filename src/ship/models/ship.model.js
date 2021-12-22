const moongose = require('mongoose');

const shipSchema = new moongose.Schema({
    _BaseModule: {
        speed: Number,
        health: Number,
        health_parts: {
            mast: [],
            sail: [],
            deck: {},
            rest: {}
        },
        ranking: Number,
        shipType: String,
        name: String,
        captain: { id: String },
        cannonQuantity: { min: Number, max: Number },
        crewMaxQuantity: Number,
        crew: [ { id: String } ],

        _InventoryModule: {
            maxWeight: Number,
            items: [{ id: Number, quantity: Number }]
        }
    },

    _AttackModule: {
        currentQuantity: Number,
        cannon: []
    }
});

const Ship = moongose.model('Ship', shipSchema);
module.exports = Ship;