require("dotenv").config();

const express = require("express");
const ProductModel = require("../models/product.model");

const app = express.Router();

//getting all products.
app.get("/", async (req,res)=> {
    try{
        const products = await ProductModel.find();
        return res.status(200).send(products);
    }catch(e){
        return res.status(404).send("Bad request...")
    }
})

//get all products by category.
app.get("/:category", async(req,res)=> {
    const {category} = req.params;
    let {limit=15, page=1} = req.query;
    try{
        const products = await ProductModel.find({category: category}).limit(limit).skip((page-1)*limit);
        return res.status(201).send(products);
    }catch(e){
        return res.status(401).send("wrong caterory")
    }
})

//get specific product details
app.get("/:category/:id", async(req,res)=> {
    const {category, id} = req.params;
    try{
        const product = await ProductModel.find({ _id: id, category: category });
        return res.status(201).send(product);
    }catch(e){
        return res.status(401).send("wrong id or category");
    }
})

// filter out the products.
app.get("/:category/:sortType/sort", async(req,res)=> {
    let {category, sortType} = req.params;
    try{
        if(sortType==="asc"){
            const products = await ProductModel.find({category: category}).sort({price: 1})
            return res.status(200).send(products);
        }else if(sortType==="desc"){
            const products = await ProductModel.find({category: category}).sort({price: -1})
            return res.status(200).send(products);
        }else{
            return res.send("kuch or try kro")
        }
    }catch(e){
        return res.send("hamse na hoga bhaiya");
    }
})

module.exports = app;