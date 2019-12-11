const mongoose = require('mongoose');


const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    }
})

SpotSchema.virtual('thumbnail_url').get(function(){
    //return `http://localhost:3333/files/${this.thumbnail}` //normal
    return `http://172.20.10.3:19000/files/${this.thumbnail}` //para pegar no android precisa ter o ip da maquina host
})


module.exports = mongoose.model('Spot', SpotSchema);