import userService from '../../services/user.js'


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
    async isAutorized(accessToken){
        if (!await userService.isAutorized(accessToken)){
            return false
        }
        return true
    }
}


export default new FrontendController()