import Server from '../server.js'


class User{

    constructor(){
        this.api = new Server()
    }

    async login(view, data){
  
        const response = await this.api.request('/user/login', "POST", data)
            
        if(!await view.errorProcessing(response)){
            window.location.href = "/app"
        }

    }
    async signup(form, view, data){
        try{
            view.blockButton(form.querySelector('button[type="submit"]'))
            view.addPreloader()

            const response = await this.api.request('/user/registration', "POST", data)

            if(response.message){
                view.showError(response.message)
                return view.removePreloader()
            }
    
            view.showError('')
            view.removePreloader()
            view.showInfo(`На указанную почту было отправлено письмо для подтверждения аккаунта!`)
        }catch(e){
            console.log(e)
        }
    }

    async logout(){
        await this.api.request('/user/logout', "POST")
    }
}


export default new User