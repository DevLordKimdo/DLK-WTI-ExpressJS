const express     = require('express');
const router      = express.Router();
const fsPromises  = require('fs/promises');
const path        = require('path');

router.get(['/','/index'], async (req, res) => {

    res.render('uix/popup/terms/index', {});
});

router.get('/:terms', async (req, res) => {

    try {
        const terms        = req.params.terms;
        const termsPath    = path.join(global.viewPath, `uix/popup/terms/${terms}.html`);
        const termsContent = await fsPromises.readFile(termsPath, 'utf8');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(termsContent);
    } catch (error) {
        console.error('파일 읽기 오류:', error);
    }
});

module.exports = router;