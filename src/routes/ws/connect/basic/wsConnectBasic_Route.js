const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('ws/connect/basic/index', { });
});

module.exports = router;