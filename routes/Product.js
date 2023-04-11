const express=require('express')

const productrouter=express.Router()

const product = require('../models/Products')

//add user

productrouter.post('/add',async(req,res)=>{

    try {

        let addedProduct= new product(req.body)
        let savedProduct= await addedProduct.save()
        res.send({user:savedProduct, msg:"product is saved"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})
//get all
productrouter.get('/all',async(req,res)=>{

    try {

        let allProducts= await product.find()
        res.send({Products:allProducts, msg:"all products are here"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})



//get user by id
productrouter.get('/:id',async(req,res)=>{

    try {

        let ProductById= await product.findById({_id:req.params.id})
        res.send({Product:ProductById, msg:" product is here"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})


//delete user by id
productrouter.delete('/:id',async(req,res)=>{

    try {

        let deleteById= await product.findByIdAndDelete({_id:req.params.id})
        res.send({deletedById:deleteById, msg:"product is deleted"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})
//update


productrouter.put('/:id',async(req,res)=>{

    try {

        let updateById= await product.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        res.send({updatedById:updateById, msg:"product is updated"})
   //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur      
   
} catch (error) {

        console.log(error)
    }
})


module.exports=productrouter