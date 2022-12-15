require("dotenv").config();

const express = require("express");
const CartModel = require("../models/cart.model");

const app = express.Router();

app.get("/:id", async (req,res)=> { // get all cart products by user id
    const {id} = req.params;
    try{
        const items = await CartModel.find({userId: id});
        return res.status(201).send(items);
    }catch(e){
        return res.status(401).send(e.message)
    }
    return res.send("cart page");
})

app.post("/:id", async(req,res)=> {//user ki id
    const {id} = req.params;
    const {productId} = req.body;
    try{
        const isItemExist = CartModel.find({productId: productId});
        if(isItemExist){
            return res.status(201).send("item already exits");
        }
        else{
            const item = new CartModel({...req.body,  userId: id})
            await item.save();
            return res.status(200).send(item);
        }
    }catch(e){
        return res.status(401).send(e);
    }
})

app.patch("/:id", async(req,res)=> { // document ki object _id and body me increased qyt
    const {id} = req.params;
    // console.log(id)
    try{
        const afterUpdate = await CartModel.findByIdAndUpdate(id, {$set: {quantity: req.body.quantity}}, {new: true});
        return res.status(200).send(afterUpdate);
    }catch(e){
        return res.status(401).send(e);
    }
})

// app.delete("/:id", async(req,res)=> { // document ki object _id 
//     const {id} = req.params;
//     try{
//         const afterDelete = await CartModel.findByIdAndRemove(id);
//         return res.status(200).send(afterDelete);
//     }catch(e){
//         return res.status(401).send(e);
//     }
// })

module.exports = app;