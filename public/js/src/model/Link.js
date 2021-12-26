import Server from "../server.js"

const server = new Server()

class Link{
    async create(url, view = {}){
        const response = await server.request('/link', "POST", {url})

        if(response.status == 401){
            window.location.href = "/app/login"
        }
    }
}

export default new Link