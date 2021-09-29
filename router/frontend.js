import { Router } from "express";

const front = new Router()


front.get('/', (req, res) => {
    res.send("Front")
})


export default front