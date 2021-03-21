var mysql = require('mysql');

var connMySql = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'paulada22',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    return connMySql;
}