export default async function(req, res, next){
    res.removeCookies = (req, res) => {
        for(let cookieKey in req.cookies){
            res.clearCookie(cookieKey)
        }
    }
    next()
}