// pouzite balicky
const express = require('express');
// vytvoreni routeru
const router = express.Router();

// vlozeni controlleru do promenne
const controller = require('../controllers/apiController');

// podporovane URL
router.get('/hello', controller.hello);
router.get('/json', controller.json);

// export vysledneho routeru ze souboru
module.exports = router;
