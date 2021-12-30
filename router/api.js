import { Router } from "express";
import user from '../controllers/api/user.js'
import { body } from 'express-validator'
import validation from "../middlewares/validation.js";
import isAuth from "../middlewares/isAuth.js";
import link from "../controllers/api/link.js"


const api = new Router()

// USER
api.post('/user/registration',
    body('email').isEmail(), 
    body('password').isLength({ min: 8, max: 70 }), 
    validation,
    user.registration
)
api.post('/user/login',  
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 70 }),
    validation,user.login
)
api.post('/user/logout', user.logout)
    

// LINK
api.post('/link', 
    body('url').not().isEmpty(),
    validation,
    isAuth,
    link.create
)

export default api