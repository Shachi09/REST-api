const mongoose = require('mongoose');




const flowerSchema = new mongoose.Schema({
    flowerName:{
        type : String
    },
    flowerColor:{
        type: String
    },
    flowerPrice:{
        type: Number 
    }
});


const flowerModel= new mongoose.model('Flowers', flowerSchema);
module.exports = flowerModel ; 