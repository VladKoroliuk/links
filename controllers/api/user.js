import userService from '../../services/user.js'

class User{
    async registration(req, res, next){
        try{
            const {email, password} = req.body

            const result = await userService.registration(email, password)
            const cookieOptions = { maxAge: 1000 * 60 * 60 * 60, httpOnly: true }

            res.cookie('activation_code',result.code, cookieOptions)
            res.cookie('activation_hash',result.hash, cookieOptions)
            res.cookie('activation_email',result.email, cookieOptions)

            return res.status(200).redirect('/app')
        }catch(e){
            next(e)
        }
    }
    async activate(req, res, next){
        try{
            const { activation_code, activation_hash, activation_email } = req.cookies
            const input_code = req.params.code
    
            const result = await userService.createAccount(activation_hash, activation_email, activation_code, input_code)

            res.removeCookies(req, res)

            res.cookie('accessToken',result.tokens.accessToken, { maxAge: 1000 * 60 * 60 * 24, httpOnly: false })
            res.cookie('refreshToken',result.tokens.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true })

            res.cookie('userData', JSON.stringify(result.user), { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: false })

            return res.status(200).redirect('/')
        }catch(e){
            next(e)
        }
    }
    async login(req, res, next){
        try{

            const { email, password } = req.body

            const result = await userService.login(email, password)

            res.cookie('accessToken',result.tokens.accessToken, { maxAge: 1000 * 60 * 60 * 24, httpOnly: false })
            res.cookie('refreshToken',result.tokens.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true })

            res.cookie('userData', JSON.stringify(result.user), { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: false })

            return res.redirect('/app')


        }catch(e){
            next(e)
        }
    }
    async logout(req, res, next){
        try{
            await userService.logout(req.cookies.refreshToken)

            res.removeCookies(req, res)

            return res.status(301).redirect(req.originalUrl)
        }catch(e){
            next(e)
        }
    }
    
}

export default new User