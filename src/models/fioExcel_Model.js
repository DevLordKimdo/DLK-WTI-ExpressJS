const { db } = require(global.dbConf);

const excelUpload = (params) => {
    try {
        let valueHolders = '';
        let values = {};

        params.forEach((data, index) => {
            valueHolders += `(:title${index}, :username${index}, :content${index}),`;
            values[`title${index}`]    = data.title;
            values[`username${index}`] = data.username;
            values[`content${index}`]  = data.content;
        });
        valueHolders = valueHolders.slice(0, -1);

        let qry  = ` INSERT INTO post_board               `;
            qry += `             ( title, username, content ) `;
            qry += `      VALUES                          `;
            qry += `             ${valueHolders}          `;

        db.prepare(qry).run( values );
        
        return null;
    } catch (err) {
        return err;
    }
}

module.exports = {
    excelUpload
};