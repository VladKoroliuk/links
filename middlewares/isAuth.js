import ApiError from '../exeptions/api-error.js'

export default function(err, req, res, next){
    
    if(!(req.user && req.autorized)){
        return next(ApiError.UnautorizedError())
    }
    
    return next()

}