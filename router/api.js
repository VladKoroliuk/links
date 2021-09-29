import { Router } from "express";
import { User } from '../controllers/index.js'

const api = new Router()
const user = new User()


api.get('/test', user.test)


export default api