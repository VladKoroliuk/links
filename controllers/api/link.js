import linkService from '../../services/link.js'

class Link {

    async create(req, res, next) {
        try {

            const { url } = req.body

            const user = req.user._id

            const response = await linkService.create(user, url)

            return res.status(200).json(response)

        } catch (e) {
            next(e)
        }
    }
    async follow(req, res, next) {
        try {
            res.render('follow')
        } catch (e) {
            next(e)
        }
    }
}

export default new Link