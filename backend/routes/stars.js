const router = require('express').Router();
let Star = require('../models/star.model');

router.route('/').get((req,res) => {
    Star.find()
    .then(stars => res.json(stars))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    
    const name = req.body.name;
    const description = req.body.description;
    const image = req.body.image;
    const constellations = req.body.constellations;

    const newStar = new Star({
        name,
        description,
        image,
        constellations,
    });
    
    newStar.save()
    .then(() => res.json('Star added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) =>{
    Star.findById(req.params.id)
    .then(star => res.json(star))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    Star.findByIdAndDelete(req.params.id)
    .then(() => res.json('Star deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Star.findById(req.params.id)
    .then(star => {
        star.name = req.body.username;
        star.description = req.body.description;
        star.image = req.body.image;
        star.constellations = req.body.constellations;

        star.save()
        .then(() => res.json('Star updated!'))
        .catch(err => res.status(400).json('Erorr: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
