// const mongoose = require("mongoose");

// const Connect = async ()=> {
//     const server =  await mongoose.connect(process.env.DB_URL);
//     return server;
// }

// module.exports = Connect;
const mongoose = require("mongoose");

const connect = async () => {
	client = await mongoose.connect(process.env.DB_URL);
	return client;
};

module.exports = connect;