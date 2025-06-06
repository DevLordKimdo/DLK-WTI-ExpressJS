const { db } = require(global.dbConf);

const list = () => {
    try {
        let qry  = " SELECT idx        ";
            qry += "      , title      ";
            qry += "      , content    ";
            qry += "      , name       ";
            qry += "      , datetime   ";
            qry += "      , hit        ";
            qry += "   FROM post_board ";

            const result = db.prepare(qry).all();
        
        return result;
    } catch (err) {
        return err;
    }
}

const create = (params) => {
    try {
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

        return null;
    } catch (err) {
        return err;
    }
}

const read = (params) => {
    try {
        let qry  = " SELECT idx        ";
            qry += "      , title      ";
            qry += "      , content    ";
            qry += "      , name       ";
            qry += "      , datetime   ";
            qry += "      , hit        ";
            qry += "   FROM post_board ";
            qry += "  WHERE idx = :idx ";

        const result = db.prepare(qry).get({
            idx : params
        });
        
        return result;
    } catch (err) {
        return err;
    }
}

const updateHit = (params) => {
    try {
        let qry  = " UPDATE post_board    ";
            qry += "    SET hit = hit + 1 ";
            qry += "  WHERE idx = :idx    ";

        db.prepare(qry).run({
            idx : params
        });
        
        return null;
    } catch (err) {
        return err;
    }
}

const update = (params) => {
    try {
        let qry  = " UPDATE post_board         ";
            qry += "    SET title   = :title   ";
            qry += "      , name    = :name    ";
            qry += "      , content = :content ";
            qry += "  WHERE idx     = :idx     ";

        db.prepare(qry).run({
                title   : params.title
            ,content : params.content
            ,name    : params.name
            ,idx     : params.idx
        });
        
        return null;
    } catch (err) {
        return err;
    }
}

const deletePost = (params) => {
    try {
        let qry  = " DELETE             ";
            qry += "   FROM post_board  ";
            qry += "  WHERE idx  = :idx ";

        db.prepare(qry).run({
            idx : params
        });
        
        return null;
    } catch (err) {
        return err;
    }
}

const createReturnIdx = (params) => {
    try {
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

        let result = db.prepare(qry).run({
                title   : params.title
            ,content : params.content
            ,name    : params.name
        });
        
        return result.lastInsertRowid;
    } catch (err) {
        return err;
    }
}

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
    list,
    create,
    read,
    updateHit,
    update,
    deletePost,
    createReturnIdx,
    createWithTrans
};