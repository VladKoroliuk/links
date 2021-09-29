import { Router } from "express";

const link = new Router()


link.get('/:ID', (req, res) => {
    res.send("Link")
})
link.get('/', (req, res)=> {
    res.redirect('/app')
})

export default link