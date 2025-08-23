const { db } = require(global.dbConf);

const list = () => {
    try {
        let qry  = " SELECT idx        ";
            qry += "      , title      ";
            qry += "      , content    ";
            qry += "      , username       ";
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
            qry += "      , username                         ";
            qry += "      , datetime                     ";
            qry += "      , hit                          ";
            qry += " ) VALUES (                          ";
            qry += "        :title                       ";
            qry += "      , :content                     ";
            qry += "      , :username                        ";
            qry += "      , datetime('now', 'localtime') ";
            qry += "      , '0'                          ";
            qry += " )                                   ";

            db.prepare(qry).run({
                 title   : params.title
                ,content : params.content
                ,username    : params.username
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
            qry += "      , username       ";
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
            qry += "      , username    = :username    ";
            qry += "      , content = :content ";
            qry += "  WHERE idx     = :idx     ";

        db.prepare(qry).run({
                title   : params.title
            ,content : params.content
            ,username    : params.username
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
            qry += "      , username                         ";
            qry += "      , datetime                     ";
            qry += "      , hit                          ";
            qry += " ) VALUES (                          ";
            qry += "        :title                       ";
            qry += "      , :content                     ";
            qry += "      , :username                        ";
            qry += "      , datetime('now', 'localtime') ";
            qry += "      , '0'                          ";
            qry += " )                                   ";

        let result = db.prepare(qry).run({
                title  : params.title
            ,content   : params.content
            ,username  : params.username
        });
        
        return result.lastInsertRowid;
    } catch (err) {
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
    createReturnIdx
};