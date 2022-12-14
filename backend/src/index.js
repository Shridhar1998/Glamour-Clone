// require("dotenv").config();

// const express = require('express')
// const mongoose = require("mongoose")
// const cors = require("cors");

// const PORT = process.env.PORT || 8080;
// const connect = require("./congif/db");

// const userRouter = require("./routes/user.router");

// const app = express()
// mongoose.set('strictQuery', false);

// app.use(express.urlencoded({extended: true}))
// app.use(express.json())
// app.use(cors());

// app.use("/user", userRouter);

// app.get('/', (req, res) => res.send('Glomour'))

// app.listen(PORT, async ()=> {
//     connect();
//     console.log(`listening on http://localhost:${PORT}`)
// })

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./congif/db");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const userRouter = require("./routes/user.router");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);
app.use("/user", userRouter);


app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(PORT, async () => {
	connect();
	console.log(`Listening at http://localhost:${PORT}`);
});