import express from 'express'

import routerApi from './router/api.js'
import routerFront from './router/frontend.js'
import routerLink from './router/link.js'

const app = express()

app.use('/api', routerApi)
app.use('/app', routerFront)
app.use('/', routerLink)



app.listen(3000, () => {
    console.log("Working")
})