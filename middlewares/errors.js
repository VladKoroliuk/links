import ApiError from '../exeptions/api-error.js'

export default function(err, req, res, next){
    console.error(err)  
    if(err instanceof ApiError){

        if(err.status == 404){
            return res.status(404).render('404')
        }

        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: "Непредвиденная ошибка"})
}