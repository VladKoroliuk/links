import ApiError from '../exeptions/api-error.js'

export default function(req, res, next){
    try{
        if(!(req.user && req.autorized)){
            return next(ApiError.UnautorizedError())
        }
        return next()
    }catch(e){
        next(ApiError.UnautorizedError())
    }
}