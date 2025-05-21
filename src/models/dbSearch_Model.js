const { db } = require(global.dbConf);

const list = (params) => {
    try {
        let qry  = " SELECT idx        ";
            qry += "      , title      ";
            qry += "      , content    ";
            qry += "      , name       ";
            qry += "      , datetime   ";
            qry += "      , hit        ";
            qry += "   FROM post_board ";
            qry += "  WHERE 1 = 1      ";

            if(params.searchKeyword) {
                     if(params.searchOption == 'title')   { qry += " AND title   LIKE '%' || :searchKeyword || '%' "; }
                else if(params.searchOption == 'content') { qry += " AND content LIKE '%' || :searchKeyword || '%' "; }
                else if(params.searchOption == 'name')    { qry += " AND name    LIKE '%' || :searchKeyword || '%' "; }
            }

            if(params.searchDateStart && params.searchDateStart) {
                qry += " AND datetime BETWEEN :searchDateStart AND :searchDateEnded ";
            }

            const result = db.prepare(qry).all({
                  searchKeyword   : params.searchKeyword 
                , searchDateStart : params.searchDateStart
                , searchDateEnded : params.searchDateEnded
            });
        
        return result;
    } catch (err) {
        return err;
    }
}

module.exports = {
    list
};