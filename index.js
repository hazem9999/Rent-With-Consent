const express = require("express");
const owner = require("./routes/api/owner");
const request = require("./routes/api/request");
const vehicle = require("./routes/api/vehicle");
const user = require('./routes/api/user')
const cors = require('cors')
const mongoose = require("mongoose");
require('dotenv').config();

const db = require('./config/keys').mongoURI;

const app = express();
app.use(express.json());
app.use(cors())


app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Rent with consent</h1>
    <a href="/api/owner">Owners</a>
    <a href="/api/user">Users</a>
    <a href="/api/request">Requests</a>
    <a href="/api/vehicle">Vehicles</a>
    `);
});

mongoose
  .connect(db)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log(err));
// Direct routes to appropriate files

app.use("/api/owner", owner);
app.use("/api/request", request);
app.use("/api/vehicle", vehicle);
app.use("/api/user", user)

// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

const port = 3001;
app.listen(port, () => console.log(`Server up and running on port ${port}`));