
export default {
    init(){

        const path = window.location.pathname

        const category = path.split('/')[2]

        const items = document.getElementsByClassName('header-section')

        switch (category) {
            case '':
                items[1].classList.add('header-section__active')
                break;
            case 'list':
                items[2].classList.add('header-section__active')
                break;
            case 'statistics':
                items[0].classList.add('header-section__active')
                break;
            default:
                break;
        }


    }
}