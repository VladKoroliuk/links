import { Router } from "express";
import frontend from '../controllers/frontend/index.js'
import user from '../controllers/api/user.js'

const front = new Router()


front.get('/', frontend.main)
front.get('/login', frontend.login)
front.get('/signup', frontend.registration)
front.get('/list', frontend.list)
front.get('/statistics', frontend.statistics)
front.get('/activate/:code', user.activate)


export default front