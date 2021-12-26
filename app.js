import express from 'express'
import dotenv from 'dotenv' 
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import routerApi from './router/api.js'
import routerFront from './router/frontend.js'
import routerLink from './router/link.js'
import errors from './middlewares/errors.js'
import auth from './middlewares/auth.js'
import clearCookies from './middlewares/clearCookies.js'
dotenv.config()

const app = express()


app.set('views', './public/html')
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cookieParser())
app.use(clearCookies)
app.use(auth)
app.use('/api', routerApi)
app.use('/app', routerFront)
app.use('/', routerLink)
app.use(errors)

const start = async () => {
    try{
        await mongoose.connect(process.env.DBLINK, {
            useNewUrlParser: true,
        })
        app.listen(process.env.PORT, (err) => {
            if(err){
                throw err
            }else{
                console.log("\x1b[34m", `Started: http://localhost:${process.env.PORT}`)
            }
        })
    }catch(e){
        throw e
    }
    
}

start()