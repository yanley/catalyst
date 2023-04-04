const express = require("express");
const app = express();
const cors = require('cors'); //in case of issues connecting frontend to backend
const jobRoutes = require('./routes/jobRoutes');
const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const favouriteRoutes = require('./routes/favouriteRoutes');
const bodyParser = require("body-parser");
const { addHook } = require("./models/job");

require("dotenv").config();
// require("./dbConnect"); //example using Sequelize package

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors());
app.use('api', require('./routes/userRoutes'));
app.use('api', require('./routes/favouriteRoutes'));
app.use('/api', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/favourites', favouriteRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL JobAdder application." });
});

app.post('/api/users/login', (req, res) => {
    //extract the email and password from the request
    const { email, password } = req.body;

    //check if the email and password are valid
    //if so, create a JWT and send it back in response
    //it not, send an error message
});

app.use('/api/users', userRoutes) //sequelize
app.use('/api/favourites', favouriteRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});