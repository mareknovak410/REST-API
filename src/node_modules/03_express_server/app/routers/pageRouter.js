// pouzite balicky
const express = require('express');
// vytvoreni routeru
const router = express.Router();

// podporovane URL
router.get('/error', require('../controllers/pageController').error);
router.get(['/', '/index'], require('../controllers/pageController').index);

// export vysledku pro import nekde jinde
module.exports = router;
