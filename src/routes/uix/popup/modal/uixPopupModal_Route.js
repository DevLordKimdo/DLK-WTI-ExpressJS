const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('uix/popup/modal/index', {});
});

module.exports = router;