import app from '../../app.js'
import userController from '../controller/User.js'

app.events = function(){
    const form = document.getElementById('signup')
    const inputs = form.getElementsByTagName('input')
    const errorDisplay = document.getElementById('error')
    const infoDisplay = document.getElementById('result')
    const loaderWraper = document.getElementById('loaderContainer')
    const user = new userController(form, inputs, errorDisplay, infoDisplay, loaderWraper)


    form.onsubmit = (e) => {
        e.preventDefault()
        user.signup()
    }


}


app.init()