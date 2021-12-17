const ShipParts = require('./models/ship-parts.model')

class ShipPartsService { 
    
    async findById(id) {
        return ShipParts.findById(id, (err) => { 
            if(err) return err;
         });
    }

    async save(data) {
        const shipPart = new ShipParts(data)
        return shipPart.save((err) => {
            console.log(err)
        });
    }

    async update(cannon) {
        return ShipParts.updateOne(cannon, (err) => {
            if(err) return err;
        });
    }

    async delete(cannon) {
        return ShipParts.deleteOne(cannon, (err) => {
            if(err) return err;
          });
    }
}

module.exports = new ShipPartsService()