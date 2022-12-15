require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connect = require("./congif/db");
const PORT = process.env.PORT;

const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/cart",cartRouter);


app.get("/", (req, res) => {
	res.send("Glomour project");
});

app.listen(PORT, async () => {
	connect();
	console.log(`Listening at http://localhost:${PORT}`);
});

