const mongoose=require('mongoose')
const schema=mongoose.Schema
const productschema= new schema({

    Name:{
        type:String,
        required:true
    },
    Composition:{
        type:String,
        required:true
    },
    

    image:{
        type:String,
        default:"https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
    
    },

    price:{
        type:Number,
    },
     info:{
        type:String,
     }
    
    })
    
    const product=mongoose.model('products',productschema)
    module.exports=product