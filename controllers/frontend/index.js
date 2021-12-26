import linkService from '../../services/link.js'


class FrontendController{
    async main(req, res){
        res.render('main', {
            autorized: req.autorized,
            userData: req.user
        })
    }
    async login(req, res){


        if(req.autorized){
            return res.redirect('/app')
        }


        res.render('login')
    }
    async registration(req, res){

        if(req.autorized){
            return res.redirect('/app')
        }

        res.render('registration')
    }
    async list(req, res){
        if(!req.autorized){
            return res.redirect('/app/login')
        }

        const links = await linkService.get(req.user._id)

        res.render('list', {
            autorized: req.autorized,
            userData: req.user,
            links
        })
    }
    async statistics(req, res){
        if(!req.autorized){
            return res.redirect('/app/login')
        }

        res.render('statistics', {
            autorized: req.autorized,
            userData: req.user
        })
    }
}


export default new FrontendController()