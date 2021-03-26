class NoticiasDAO {
    constructor(connection) {
        this._connection = connection;
    }
    
    getNoticias = (callback) => {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
    }

    getNoticia = (id_noticia, callback) => {
        this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
    }

    salvarNoticia = (noticia, callback) => {
        this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }

    get5UltimasNoticias = (callback) => {
        this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
    };
}

module.exports = () => {
    return NoticiasDAO;
};