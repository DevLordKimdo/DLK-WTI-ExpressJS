const { db } = require(global.dbConf);

const list = () => {
    try {
        let qry  = " SELECT a.idx                                                                            ";
            qry += "      , a.group_idx                                                                      ";
            qry += "      , a.name                                                                           ";
            qry += "      , a.size                                                                           ";
            qry += "      , a.seq                                                                            ";
            qry += "      , a.datetime                                                                       ";
            qry += "      , ( SELECT COUNT(*) FROM file_board WHERE group_idx = a.group_idx ) AS group_count ";
            qry += "   FROM file_board AS a                                                                  ";
            const result = db.prepare(qry).all();
        return result;
    } catch (err) {
        return err;
    }
}

module.exports = {
    list
};