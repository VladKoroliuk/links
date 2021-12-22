import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import tokenModel from '../models/token.js'

dotenv.config()

class Token {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.TOKEN_ACCESS_SECRET, { expiresIn: '30d' })
        const refreshToken = jwt.sign(payload, process.env.TOKEN_REFRESH_SECRET, { expiresIn: '60d'})
        return { accessToken, refreshToken }
    }
    async save(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId })
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({ user: userId, refreshToken })
        return token
    }
    async remove(refreshToken) {
        const token = tokenModel.findOneAndDelete({ refreshToken })
        return token
    }
    async find(refreshToken){
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData
    }
    validateAccess(token){
        try{
            const userData = jwt.verify(token, process.env.TOKEN_ACCESS_SECRET)
            return userData
        }catch(e){
            return null
        }
    }
    validateRefresh(token){
        try{
            const userData = jwt.verify(token, process.env.TOKEN_REFRESH_SECRET)
            return userData
        }catch(e){
            return null
        }
    }
}
export default new Token()