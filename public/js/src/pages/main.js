import app from '../../app.js'
import linkController from '../controller/Link.js'
import navigation from '../includes/navigation.js'
navigation.init()

app.events = function(){
    
    const form = document.getElementById('add-link')
    const link = new linkController()

    form.onsubmit = async (e) => {
        e.preventDefault()
        await link.create()
    }


}

app.init()