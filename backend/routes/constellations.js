const router = require('express').Router();
let Constellation = require('../models/constellation.model');

router.route('/').get((req,res) => {
    Constellation.find()
    .then(constellations => res.json(constellations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    
    const name = req.body.name;
    const description = req.body.description;
    const image = req.body.image;
    const stars = req.body.stars;

    const newConstellation = new Constellation({
        name,
        description,
        image,
        stars,
    });
    
    newConstellation.save()
    .then(() => res.json('Constellation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) =>{
    Constellation.findById(req.params.id)
    .then(constellation => res.json(constellation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    Constellation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Constellation deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Constellation.findById(req.params.id)
    .then(constellation => {
        constellation.name = req.body.name;
        constellation.description = req.body.description;
        constellation.image = req.body.image;
        constellation.constellations = req.body.constellations;

        constellation.save()
        .then(() => res.json('Constellation updated!'))
        .catch(err => res.status(400).json('Erorr: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
