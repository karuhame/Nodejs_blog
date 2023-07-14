
newsRouter = require('./news');
sitesRouter = require('./sites');



function route(app){

    app.use('/news', newsRouter);
    
    app.use('/', sitesRouter);



    
}

module.exports = route; 