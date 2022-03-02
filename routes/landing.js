const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('yo! am the new page via router. Fancy innit? B-)')
});

module.exports = router;