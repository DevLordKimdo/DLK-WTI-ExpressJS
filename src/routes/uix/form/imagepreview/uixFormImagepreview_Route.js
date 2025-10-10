const express        = require('express');
const router         = express.Router();

router.get(['/','/form'], async (req, res) => {

    res.render('uix/form/imagepreview/form', { });
});

module.exports = router;