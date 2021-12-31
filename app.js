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
import { WebSocketServer } from 'ws'
import { handler } from './websocket.js'
import http from 'http'
import path from 'path'
import favicon from 'serve-favicon'
dotenv.config()
const app = express()
const server = http.createServer(app)

app.use(favicon(path.join(path.resolve(),'public','images','favicon.ico')))
app.set('views', './public/html')
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cookieParser())
app.use(clearCookies)
app.use(auth)
app.use('/api', routerApi)
app.use('/app', routerFront)
app.use('/', routerLink)
app.get('*', (req, res) => res.status(404).render('404'))
app.use(errors)


const wss = new WebSocketServer({ server })
handler(wss)


const start = async () => {
    try {
        await mongoose.connect(process.env.DBLINK, {
            useNewUrlParser: true,
        })

        server.listen(process.env.PORT, (err) => {
            if (err) {
                throw err
            } else {
                console.log("\x1b[34m", `Started: http://localhost:${process.env.PORT}`)
            }
        })
    } catch (e) {
        throw e
    }
}

start()