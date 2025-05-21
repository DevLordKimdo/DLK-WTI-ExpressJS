const { db } = require(global.dbConf);

const list = (params) => {
    try {
        let qry  = "   SELECT idx            ";
            qry += "        , title          ";
            qry += "        , content        ";
            qry += "        , name           ";
            qry += "        , datetime       ";
            qry += "        , hit            ";
            qry += "     FROM post_board     ";
            qry += " ORDER BY idx DESC       ";
            qry += "    LIMIT :postsPerPage  ";
            qry += "   OFFSET :pageStart     ";

            const result = db.prepare(qry).all({
                  postsPerPage : params.postsPerPage
                , pageStart    : params.pageStart
            });

        return result;
    } catch (err) {
        return err;
    }
}

const count = () => {
    try {
        let qry  = " SELECT Count(*) AS cnt FROM post_board ";

            const result = db.prepare(qry).get({ });
        
        return result.cnt;
    } catch (err) {
        return err;
    }
}

module.exports = {
    list,
    count
};