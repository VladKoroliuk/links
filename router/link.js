import { Router } from "express";
import linkController from '../controllers/api/link.js'
const link = new Router()


link.get('/f/:ID', linkController.follow)
link.get('/', (req, res)=> {
    res.redirect('/app')
})

export default link