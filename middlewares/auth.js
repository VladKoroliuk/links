import tokenService from '../services/token.js'

export default async function(req, res, next){
    if(!req.cookies){
        req.autorized = false
        return next()
    }

    const accessToken = req.cookies.accessToken
    const user = await tokenService.validateAccess(accessToken)



    if(user == null){
        req.autorized = false
        return next()
    }

    req.user = user
    req.autorized = true
    next()
}