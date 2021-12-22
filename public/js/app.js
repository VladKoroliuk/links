import userModel from './src/model/User.js'

const app = {
    init(){
        this.main()
        this.events()
    },
    main(){},
    events(){

        const logoutButton = document.getElementById('logout')

        if(logoutButton){
            logoutButton.onclick = async () => {
                await userModel.logout()
    
                window.location.href = "/app"
            }
        }

        

    },
}
app.init()

export default app