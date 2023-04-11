const mongoose=require('mongoose')
const schema=mongoose.Schema
const restaurantschema= new schema({

    Name:{
        type:String,
        required:true
    },

    Adress:{
        type:String,
        required:true
    },

    Description:{
        type:String,
        required:true
    },

    image:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
    
    } 
    
    })
    
    const restaurant=mongoose.model('restaurants',restaurantschema)
    module.exports=restaurant