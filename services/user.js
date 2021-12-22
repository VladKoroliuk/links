import userModel from '../models/user.js'
import bcrypt from 'bcrypt'
import Mail from './mail.js'
import {v4} from 'uuid'
import ApiError from '../exeptions/api-error.js'
import tokenService from './token.js'


class User{
    async registration(email, password){
        
        if(await this.isEmailExists(email)){
            throw ApiError.BadRequest("Такой email уже существует!")
        }
        
        const hash = await bcrypt.hash(password, 10)
        const code = v4()
        await Mail.sendActivationEmail(email, code)
        
        return {hash, email, code}

    }
    async createAccount(hash, email, cookies_code, input_code){

        if(cookies_code != input_code){
            throw ApiError.BadRequest()
        }

        if(await this.isEmailExists(email)){
            throw ApiError.BadRequest("Такой email уже существует!")
        }

        const user = await userModel.create({email, password: hash})

        const tokens = await tokenService.generateTokens({email, hash})

        await tokenService.save(user._id, tokens.refreshToken)

        return {
            ...await user.save(),
            tokens
        }

    }
    async login(email, password){

        const user = await this.isEmailExists(email)

        if(!user){
            throw ApiError.BadRequest("Пользователя с таким email не существует!") 
        }

        if(!(await bcrypt.compare(password, user.password))){
            throw ApiError.BadRequest("Пароль неверный")
        }

        const tokens = await tokenService.generateTokens(JSON.parse(JSON.stringify(user)))

        return {
            user,
            tokens
        }


    }
    async isEmailExists(email){
        const candidate = await userModel.findOne({email})
        if(candidate){
            return candidate
        }
        return false
    }
    async isAutorized(accesToken){
        const userData = await tokenService.validateAccess(accesToken)

        if(userData == null) return false
        return userData
    }
    async logout(refreshToken){
        return await tokenService.remove(refreshToken)
    }   
}

export default new User()