const Cannon = require('./models/cannon.model')

class CannonService { 
    
    async findById(id) {
        return Cannon.findById(id, (err) => { 
            if(err) return err;
         });
    }

    async save(data) {
        const cannon = new Cannon(data)
        return cannon.save((err) => {
            console.log(err)
        });
    }

    async update(cannon) {
        return Cannon.updateOne(cannon, (err) => {
            if(err) return err;
        });
    }

    async delete(cannon) {
        return Cannon.deleteOne(cannon, (err) => {
            if(err) return err;
          });
    }
}

module.exports = new CannonService()