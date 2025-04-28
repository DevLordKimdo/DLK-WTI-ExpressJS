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

const newGroupIdx = () => {
    try {
        let qry  = " SELECT CASE WHEN MAX(group_idx) is null THEN 1 ";
		    qry += " 	   		 ELSE MAX(group_idx) + 1            ";
		    qry += "         END AS NewPostIdx                      ";
		    qry += "   FROM file_board                              ";

            const result = db.prepare(qry).all();

        return result[0].NewPostIdx;
    } catch (err) {
        return err;
    }
}

const upload = (params) => {
    try {
        let qry  = " INSERT INTO file_board ( ";
            qry += "        group_idx                    ";
            qry += "      , name                         ";
            qry += "      , size                         ";
            qry += "      , seq                          ";
            qry += "      , datetime                     ";
            qry += "  ) VALUES (                         ";
            qry += "        :groupIdx                    ";
            qry += "      , :name                        ";
            qry += "      , :size                        ";
            qry += "      , :seq                         ";
            qry += "      , datetime('now', 'localtime') ";
            qry += "  )                                  ";

            db.prepare(qry).run({
                 groupIdx : params.groupIdx
               , name     : params.name
               , size     : params.size
               , seq      : params.seq
            });

        return null;
    } catch (err) {
        return err;
    }
}

module.exports = {
    list,
    newGroupIdx,
    upload
};