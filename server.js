require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());

// connect the database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Database Connected"))
	.catch((err) => console.error(err));

const port = process.env.PORT || 4243;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
