class BaseView{
    clear(node){
        node.innerHTML = ''
    }
    clearInput(input){
        input.value = ''
    }
    text(node, text){
        node.innerHTML = text
    }
    
}


export default BaseView