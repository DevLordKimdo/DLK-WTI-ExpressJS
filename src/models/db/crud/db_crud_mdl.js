const { db } = require(global.dbConf);

console.log(db);

const testqry = (params) => {
    try {
        let qry  = " SELECT *                     ";
            qry += "   FROM crud                  ";
            qry += "  WHERE idx > :idx            ";
            qry += "                              ";

            const rows = db.prepare(qry).all({idx : params.idx});
        
        return rows;
    } catch (err) {
        return err;
    }
}
module.exports = {
    testqry
};