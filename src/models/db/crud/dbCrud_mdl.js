const { db } = require(global.dbConf);
const { sqlFormat } = require(global.rootPath + '/util/sqlManager');

const list = () => {
    try {
        let qry  = " SELECT idx,       ";
            qry += "        title,     ";
            qry += "        content,   ";
            qry += "        name,      ";
            qry += "        datetime,  ";
            qry += "        hit        ";
            qry += "   FROM crud       ";

            const result = db.prepare(qry).all();
        
        return result;
    } catch (err) {
        return err;
    }
}

const create = (params) => {
    try {
        let qry  = " INSERT INTO crud (                  ";
            qry += "        title,                       ";
            qry += "        content,                     ";
            qry += "        name,                        ";
            qry += "        datetime,                    ";
            qry += "        hit                          ";
            qry += " ) VALUES (                          ";
            qry += "       :title,                       ";
            qry += "       :content,                     ";
            qry += "       :name,                        ";
            qry += "       datetime('now', 'localtime'), ";
            qry += "       '0'                           ";
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
        let qry  = " SELECT idx,       ";
            qry += "        title,     ";
            qry += "        content,   ";
            qry += "        name,      ";
            qry += "        datetime,  ";
            qry += "        hit        ";
            qry += "   FROM crud       ";
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
        let qry  = " UPDATE crud          ";
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
        let qry  = " UPDATE crud               ";
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
            qry += "   FROM crud        ";
            qry += "  WHERE idx  = :idx ";

            db.prepare(qry).run({
                idx : params
            });
        
        return null;
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
    deletePost
};