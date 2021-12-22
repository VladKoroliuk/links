import app from '../../app.js'
import userController from '../controller/User.js'

app.events = function(){
    const form = document.getElementById('login')
    const inputs = form.getElementsByTagName('input')
    const errorDisplay = document.getElementById('error')
    const infoDisplay = document.getElementById('info')
    const user = new userController(form, inputs, errorDisplay, infoDisplay)


    form.onsubmit = async (e) => {
        e.preventDefault()
        await user.login()
    }
}


app.init()