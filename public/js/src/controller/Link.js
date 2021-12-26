import linkModel from '../model/Link.js'
import BaseView from '../view/Base.js'


class Link{
    constructor(){
        this.input = document.getElementById('add-link-input')
        this.view = new BaseView()
    }
    async create(){
        const url = this.input.value

        await linkModel.create(url)


        this.view.clearInput(this.input)
    }
}

export default Link