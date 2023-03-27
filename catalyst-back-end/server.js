const express = require("express");
const app = express();
const cors = require('cors'); //in case of issues connecting frontend to backend
const jobRoutes = require('./routes/jobRoutes');

require("dotenv").config();
// require("./dbConnect"); //example using Sequelize package

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors());
app.use('api', require('./routes/userRoutes'));
app.use('/api', jobRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL JobAdder application." });
});

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes) //sequelize

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});