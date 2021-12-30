const ws = new WebSocket('ws://localhost:3000')
const id = window.location.pathname.split('/')[2]

ws.onopen = () => {

    const message = {
        event: "transition",
        id,
    }

    ws.send(JSON.stringify(message))
    ws.onmessage = (message) => {
        // window.location.href = message.data
    }
}

ws.onerror = (err) => {
    console.log(err)
}








