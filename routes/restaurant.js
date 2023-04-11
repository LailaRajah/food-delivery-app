const express = require("express");

const restaurantrouter = express.Router();

const restaurant = require("../models/restaurants");

//add user

restaurantrouter.post("/add", async (req, res) => {
  try {
    let addedrestaurant = new restaurant(req.body);
    let savedrestaurant = await addedrestaurant.save();
    res.send({ user: savedrestaurant, msg: "restaurant is saved" });
    //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur
  } catch (error) {
    console.log(error);
  }
});
//get all
restaurantrouter.get("/all", async (req, res) => {
  try {
    let allrestaurants = await restaurant.find();
    res.send({ restaurants: allrestaurants, msg: "all restaurants are here" });
    //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur
  } catch (error) {
    console.log(error);
  }
});

//get user by id
restaurantrouter.get("/:id", async (req, res) => {
  try {
    let restaurantById = await restaurant.findById({ _id: req.params.id });
    res.send({ restaurant: restaurantById, msg: " restaurant is here" });
    //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur
  } catch (error) {
    console.log(error);
  }
});

//delete user by id
restaurantrouter.delete("/:id", async (req, res) => {
  try {
    let deleteById = await restaurant.findByIdAndDelete({ _id: req.params.id });
    res.send({ deletedById: deleteById, msg: "restaurant is deleted" });
    //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur
  } catch (error) {
    console.log(error);
  }
});
//update

restaurantrouter.put("/:id", async (req, res) => {
  try {
    let updateById = await restaurant.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ updatedById: updateById, msg: "restaurant is updated" });
    //{user : result} c'est le nom du champsdans la base de données remplis par l'utlisateur
  } catch (error) {
    console.log(error);
  }
});

module.exports = restaurantrouter;
