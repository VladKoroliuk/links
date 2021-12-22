import userModel from '../model/User.js'
import userView from '../view/Form.js'


class User{

    constructor(form, inputs, errorDisplay = null, infoDisplay = null, loaderWraper = null){
        this.inputs = inputs
        this.errorDisplay = errorDisplay
        this.view = new userView(errorDisplay, infoDisplay, loaderWraper)
        this.form = form
    }

    async login(){
        const email = this.inputs[0].value
        const password = this.inputs[1].value
        
        if(password.length < 3 || password.length > 32){
            return this.view.showError("Недопустимая длинна пароля!")
        }

        await userModel.login(this.view, {email, password})
        
    }

    signup(){
        const email = this.inputs[0].value
        const name = this.inputs[1].value
        const password = this.inputs[2].value
        const passwordRepeat = this.inputs[3].value

        if(password.length < 3 || password.length > 32){
            return this.view.showError("Недопустимая длинна пароля!")
        }
        if(passwordRepeat != password){
            return this.view.showError("Пароли должны совпадать!")
        }

        userModel.signup(this.form, this.view, {email, password, name})
        
    }

}

export default User