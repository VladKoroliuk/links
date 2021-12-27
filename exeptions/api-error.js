export default class ApiError extends Error{
    status
    errors

    constructor(status, message, errors = []){
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnautorizedError(){
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message, errors = []){
        return new ApiError(500, message, errors)
    }
    static NotFound(){
        return new ApiError(404)
    }
} 