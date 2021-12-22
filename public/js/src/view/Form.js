import Base from './Base.js'

class LoginView extends Base{

    constructor(displayError, displayInfo, loaderWraper){
        super()
        this.displayError = displayError
        this.displayInfo = displayInfo
        this.loaderWraper = loaderWraper
    }
    showError(error){
        this.displayError.innerHTML = error
    }
    showInfo(info){
        this.displayInfo.innerHTML = info
    }
    blockButton(button){
        button.setAttribute("disabled", "disabled")
    }
    unlockButton(button){
        button.removeAttribute("disabled");
    }
    addPreloader(){
        let wrap = document.createElement('div');
        wrap.classList.add('loaderWrap');

        let loader = document.createElement('div');
        loader.classList.add('loader');
        
        wrap.append(loader)

        this.loaderWraper.append(wrap)
    }
    removePreloader(){
        this.clear(this.loaderWraper)
    }
    async errorProcessing(response){

        const statusCodeKind = String(response.status).charAt(0)
        if(statusCodeKind == "5" || statusCodeKind == "4"){
            const json = await response.json()
            this.showError(json.message)
            return true
        }

        return false


    }
    
}



export default LoginView