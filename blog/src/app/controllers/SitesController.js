class SitesController{

    //[GET] /search
    search(req, res){
        res.render('search');
    }

    //[GET] /home
    index(req, res){
        res.render('home');
    }

}

module.exports = new SitesController;