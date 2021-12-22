const HTTP = require('../utils/statusHTTP');
const ShipParts = require('./models/ship-parts.model')

class ShipPartsService { 
    
    async findById(id) {
        try {
            return { ...HTTP.ok(), object: await ShipParts.findById(id)}
        }
        catch (e) {
            return HTTP.internalServer()
        }
    }

    async findAll() {
        try {
            return { ...HTTP.ok(), objects: await ShipParts.find() }
        }
        catch(e) {
            console.log(e);
            return HTTP.internalServer();
        }
    }

    async save(data) {
        
        const shipPart = new ShipParts(data);
        const error = shipPart.validateSync();

        if(error)
            return HTTP.badRequest(error.message);
        
        try {
            shipPart.save();
            return HTTP.created('Ship Part Created');
        }
        catch (e) {
            return HTTP.internalServer();
        }
    }

    async update(id, data) {
        try {
            return { ...HTTP.ok(), result: await ShipParts.findOneAndUpdate({ _id: id }, data) }
        }
        catch(e) {
            return HTTP.internalServer()
        }
    }

    async delete(id) {
        try {
            const obj = (await this.findById(id)).object;
            return { ...HTTP.ok(), result: await ShipParts.deleteOne(obj) }
        }
        catch (e) {
            return HTTP.internalServer()
        }
    }
}

module.exports = new ShipPartsService()