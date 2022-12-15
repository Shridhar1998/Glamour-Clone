require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
//argon2

const UserModel = require("../models/user.model");
const secrectToken = process.env.SECRECTTOKEN;
const refreshToken = process.env.REFRESHTOKEN;

const app = express.Router();


app.get("/", (req,res)=> {
    return res.send("user url")
})

app.post("/signup", async(req,res)=> {
    const {name, email, password, role} = req.body;

    let user = await UserModel.findOne({email});
    try{
        if(user){
            return res.status(409).send("This email is already in use try with other email.")
        }

        let newUser = new UserModel({name, email, password, role});
        await newUser.save();
        return res.status(201).send(newUser);
    }catch(e){
        return res.status(500).send(e.message);
    }

})

app.post("/login", async(req,res)=> {
    const {email, password} = req.body; //password will verify with hash later

    const user = await UserModel.findOne({email});
    // console.log(user)
    if(user){
        const token = jwt.sign(
            {id: user._id, name: user.name, email: user.email, role: user.role},
            secrectToken,
            {expiresIn: "7 days"}
        );

        const refreshT = jwt.sign(
            {id: user._id, name: user.name, email: user.email, role: user.role},
            refreshToken,
            {expiresIn: "28 days"}
        );

        return res.status(200).send({
            message: "Login Success",
            token,
            refreshToken: refreshT,
            user: user.name,
            id: user._id
        });

    }else{
        return res.status(401).send("invalid credentials");
    }
})

app.post("/refresh", async(req,res)=> {
    const refreshT = req.headers["authorization"];

    if(!refreshT)
        return res.status(401).send("login again");
    
    try{
        const verification = jwt.verify(refreshT, refreshToken);
        if(verification){

            const newToken = jwt.sign(
                {id: verification.id, name: verification.name, email: verification.email, role: verification.role},
                secrectToken,
                {expiresIn: "7 days"}
            )

            return res.send({token: newToken});
        }
    }catch(e){
        return res.status(401).send("unauthorized");
    }
})

module.exports = app;