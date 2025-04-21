const express        = require('express');
const router         = express.Router();

router.get(['/','/form'], async (req, res) => {

    res.render('fe/form/inputdisable/form', {});
});

router.post('/submit', async (req, res) => {

    console.log( "\n");
    console.log( "text Normal   Value : " + req.body.textNormal );
    console.log( "text Readonly Value : " + req.body.textReadonly );
    console.log( "text Disabled Value : " + req.body.textDisabled );
    console.log( "text Required Value : " + req.body.textRequired );
    console.log( "text Hidden   Value : " + req.body.textHidden );
    
    console.log( "checkbox Normal 1 Value : " + req.body.checkboxNormal1 );
    console.log( "checkbox Normal 2 Value : " + req.body.checkboxNormal2 );
    console.log( "checkbox Normal 3 Value : " + req.body.checkboxNormal3 );

    /* checkboxNormal3 값이 배열이 아닌 단일 값만 가져오도록 하는 코드
    if(Array.isArray(req.body.checkboxNormal3)) {
        console.log( "checkbox Normal 3 Value : " + req.body.checkboxNormal3[0] );
    } else { 
        console.log( "checkbox Normal 3 Value : "  + req.body.checkboxNormal3 );
    }
    */

    console.log( "checkbox Readonly True  Value : " + req.body.checkboxReadonlyTrue );
    console.log( "checkbox Readonly False Value : " + req.body.checkboxReadonlyFalse );
    console.log( "checkbox Disabled True  Value : " + req.body.checkboxDisabledTrue );
    console.log( "checkbox Disabled False Value : " + req.body.checkboxDisabledFalse );

    console.log( "select Normal   Value : " + req.body.selectNormal );
    console.log( "select Readonly Value : " + req.body.selectReadonly );
    console.log( "select Disabled Value : " + req.body.selectDisabled );
    
    console.log( "radio Normal   Value : " + req.body.radioNormal );
    console.log( "radio Readonly Value : " + req.body.radioReadonly );
    console.log( "radio Disabled Value : " + req.body.radioDisabled );
    
    console.log( "textarea Normal   Value : " + req.body.textareaNormal );
    console.log( "textarea Readonly Value : " + req.body.textareaReadonly );
    console.log( "textarea Disabled Value : " + req.body.textareaDisabled );

    res.redirect('/fe/form/input-disable/form');
});

module.exports = router;