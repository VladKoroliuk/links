import linkService from './services/link.js'
import transitionService from './services/transition.js'
import tokenService from './services/token.js'

export function handler(wss){ 
    wss.on('connection', (ws, req) => {
        ws.on('message', async (message) => {
    
            const data = JSON.parse(message.toString())
    
            const { event, token } = data
    
            const userData = await tokenService.validateAccess(token)
    
            const autorized = userData == null ? false : true
    
            if (autorized) {
                ws.clientID = userData._id
            }
    
            switch (event) {
                case "transition":
                    const linkData = await linkService.saveFollowData(ws._socket.remoteAddress, req.headers['user-agent'], data.id)
                    wss.clients.forEach(c => {
                        if (c.clientID == linkData.user) {
                            transitionService.getData(linkData.user).then((data) => {
                                c.send(JSON.stringify(data[data.length - 1]))
                            })
                        }
                    })
                    ws.send(linkData.from)
                    break;

                case "connect-dashboard":
                    transitionService.getData(userData._id).then((data) => {
                        ws.send(JSON.stringify(data))
                    })
                    break;
                default:
                    break;
            }
        })
    })

    return wss

}