const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const { getFavourites } = require('../controllers/favouriteController'); 

router.get('/favourites', (req, res) => {
    Controllers.favouriteController.getFavourites(req, res);
})

router.post('/addfavourite', (req, res) => {
    Controllers.favouriteController.createFavourite(req.body, res)
})

router.put('/:id', (req, res) => {   //does this need to be updated so there's something other than :id ?
    Controllers.favouriteController.updateFavourite(req, res)
})

router.delete('/:id', (req, res) => {   //does this need to be updated so there's something other than :id ?
    Controllers.favouriteController.deleteFavourite(req, res)
})

module.exports = router;