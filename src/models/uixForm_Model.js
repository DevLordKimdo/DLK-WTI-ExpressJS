const { db } = require(global.dbConf);

const createCopy = (params) => {
    try {
        let qry  = " INSERT INTO post_board (title , content , username)               ";
            qry += " SELECT                  title , content , username                ";
            qry += "   FROM      post_board                                        ";
            qry += "  WHERE      idx        IN (SELECT value FROM json_each(:idx)) ";

            db.prepare(qry).run({ idx : params });

        return null;
    } catch (err) {
        return err;
    }
}

const updateMulti = (params) => {
    try {
        let qry  = " UPDATE post_board SET                   ";
            qry += "        title    =   :title              ";
            qry += "      , username =   :username           ";
            qry += "      , content  =   :content            ";
            qry += "      , hit      =   :hit                ";
            qry += "  WHERE idx     IN   (SELECT value FROM json_each(:idx)) ";

            db.prepare(qry).run({
                 title    : params.title
                ,username : params.username
                ,content  : params.content
                ,hit      : params.hit
                ,idx      : params.checkIdx
            });

        return null;
    } catch (err) {
        return err;
    }
}

const deleteMulti = (params) => {
    try {
        let qry  = " DELETE FROM post_board WHERE idx IN (SELECT value FROM json_each(:idx)) ";

            db.prepare(qry).run({ idx : params });

        return null;
    } catch (err) {
        return err;
    }
}

module.exports = {
    createCopy,
    updateMulti,
    deleteMulti
};