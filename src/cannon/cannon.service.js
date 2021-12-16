const cannonModel = require('./models/cannon.model')

class CannonService { 
    
    async findById(id) {
        return cannonModel.findById(id, (err) => { 
            if(err) return err;
         });
    }

    async save(cannon) {
        return cannonModel.save(cannon, (err) => {
            if(err) return err;
        });
    }

    async update(cannon) {
        return cannonModel.updateOne(cannon, (err) => {
            if(err) return err;
        });
    }

    async delete(cannon) {
        return cannonModel.deleteOne(cannon, (err) => {
            if(err) return err;
          });
    }
}

module.exports = new CannonService()