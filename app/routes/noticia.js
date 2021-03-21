module.exports = (application) => {
    
    application.get('/noticia', (req, res) => {
        
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticia((error, result) => {
            res.render('noticias/noticia', { noticia: result });
        });

    });
};
