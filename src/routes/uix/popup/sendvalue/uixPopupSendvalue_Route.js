const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('uix/popup/sendvalue/index', {});
});

router.get('/popup', async (req, res) => {

    res.render('uix/popup/sendvalue/popup', {});
});

module.exports = router;