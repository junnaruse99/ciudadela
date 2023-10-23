var express = require('express');
var router = express.Router();
const HumanController = require('../controllers/humanController');

/* GET home page. */
router.get('/', async function(req, res) {
    try {
        const { page } = req.query;

        const humanCharacters = await HumanController.getHumanCharacters(parseInt(page || 1));
        res.json(humanCharacters);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
