const express = require("express");
const app = express();
const cors = require('cors'); //in case of issues connecting frontend to backend

require("dotenv").config();
require("./dbConnect"); //example using Sequelize package

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors());
app.use('api', require('./routes/userRoutes'));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL JobAdder application." });
});

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes) //sequelize

// let postRoutes = require('./routes/postRoutes')
// app.use('/api/posts', postRoutes) //sequelize

// let commentRoutes = require('./routes/commentRoutes')
// app.use('/api/comments', commentRoutes) //sequelize

// let swapiRoutes = require('./routes/swapiRoutes')
// app.use('/api/swapi', swapiRoutes) //sequelize

// let userRoutes2 = require('./routes/userRoutes_mysql2')
// app.use('/api/users2', userRoutes2) //mysql2

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});