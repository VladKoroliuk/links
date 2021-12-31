import Uri from '../uri.js'


class Statistics {

    #data = []
    #fistLoad = true

    constructor(view) {
        this.view = view
    }
    connect() {
        const socket = new WebSocket('ws://localhost:3000')
        const uri = new Uri(window.location)
        const token = document.cookie.match(/accessToken=(.+?)(;|$)/)[1]
        const linkID = uri.params.link || null


        socket.onopen = () => {
            const message = {
                event: "connect-dashboard",
                token,
                linkID
            }
            socket.send(JSON.stringify(message))
            socket.onmessage = (message) => {
                const data = JSON.parse(message.data)
                if (this.#fistLoad) {
                    this.#data = data
                    this.view.updateData(data.length, this.getFullStatistics())
                } else {
                    this.#updateData(data)
                }
                this.#fistLoad = false
            }
        }
    }
    get data() {
        return this.data
    }
    #updateData(transition) {
        const count = this.#data.push(transition)

        this.view.updateData(count, this.getFullStatistics())
    }

    transitionsFilter(field) {
        const labels = []
        const data = []
        this.#data.forEach(transition => {
            const label = transition[field]

            if (!labels.includes(label)) {
                labels.push(label)
                data.push(this.#data.filter(t => t[field] == label).length)
            }
        })
        return {
            labels,
            data
        }

    }

    getFullStatistics() {
        return {
            browsers: this.transitionsFilter('browser'),
            os: this.transitionsFilter('os'),
        }
    }


}

export default Statistics