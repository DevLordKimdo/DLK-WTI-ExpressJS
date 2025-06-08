const { db } = require(global.dbConf);

const createWithTrans = (params, errorParams, errorOption) => {
    try {
        db.prepare('BEGIN TRANSACTION').run();

        let qry  = " INSERT INTO post_board (            ";
            qry += "        title                        ";
            qry += "      , content                      ";
            qry += "      , name                         ";
            qry += "      , datetime                     ";
            qry += "      , hit                          ";
            qry += " ) VALUES (                          ";
            qry += "        :title                       ";
            qry += "      , :content                     ";
            qry += "      , :name                        ";
            qry += "      , datetime('now', 'localtime') ";
            qry += "      , '0'                          ";
            qry += " )                                   ";

        db.prepare(qry).run({
             title   : params.title
            ,content : params.content
            ,name    : params.name
        });

        if(errorOption == 'Y') {
            db.prepare(qry).run({
                 title   : errorParams.title
                ,content : errorParams.content
                ,name    : errorParams.name
            });
        }
        
        console.log('DB 작업 완료');
        db.prepare('COMMIT').run();
        return null;
    } catch (err) {
        console.log('DB 오류로 인한 롤백 : ' , err);
        db.prepare('ROLLBACK').run();
        return err;
    }
}

module.exports = {
    createWithTrans
};