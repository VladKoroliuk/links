import { Router } from "express";
import user from '../controllers/api/user.js'
import { body } from 'express-validator'
import validation from "../middlewares/validation.js";

const api = new Router()

api.post('/user/registration',
    body('email').isEmail(), 
    body('password').isLength({ min: 8, max: 70 }), 
    validation,
    user.registration)

api.post('/user/login',  
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 70 }),validation,user.login  )


api.post('/user/logout', user.logout)
    


export default api