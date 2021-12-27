import linkService from '../../services/link.js'
import ApiError from '../../exeptions/api-error.js'

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
    async list(req, res, next){
        if(!req.autorized){
            return res.redirect('/app/login')
        }

        const page = req.query.p || 1

        if(isNaN(page) || Number(page) < 1){
            return next(ApiError.NotFound())
        }

        const result = await linkService.get(req.user._id, page)

        if(result.totalPages < page){
            return next(ApiError.NotFound())
        }

        res.render('list', {
            autorized: req.autorized,
            userData: req.user,
            data: result
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