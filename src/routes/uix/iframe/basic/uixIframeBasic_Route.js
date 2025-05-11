const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('uix/iframe/basic/index', {});
});

router.get('/content', async (req, res) => {

    res.render('uix/iframe/basic/content', {});
});

module.exports = router;