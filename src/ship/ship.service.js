const HTTP = require('../utils/statusHTTP');
const Ship = require('./models/ship.model');

HTTP = require('../utils/statusHTTP');
Ship = require('./models/ship.model');

class ShipService {

    async findById(id) {
        try {
            return { ...HTTP.ok(), object: await Ship.findById(id) }
        }
        catch(e) {
            return HTTP.internalServer();
        }
    }

    async findAll() {
        try {
            return { ...HTTP.ok(), object: await Ship.find() }
        }
        catch(e) {
            console.log(e);
            return HTTP.internalServer
        }
    }

    async save(data) {
        const ship = new Ship(data);
        const error = ship.validateSync();

        if(error)
            return HTTP.badRequest();
        
        try {
            ship.save();
            return HTTP.created('Ship created');
        }
        catch(e) {
            return HTTP.internalServer();
        }
    }

    async delete(id) {
        try {
            const obj = (await this.findById(id)).object;
            return { ...HTTP.ok(), result: await Ship.deleteOne(obj) }
        }
        catch(e) {
            console.log(e);
            return HTTP.internalServer();
        }
    }

    async update(id, data) {
        try {
            return { ...HTTP.ok(), result: await Ship.findOneAndUpdate({ id: id }, data) }
        }
        catch(e) {
            return HTTP.internalServer();
        }
    }
}

module.exports = new ShipService();