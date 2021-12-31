class Uri{
    constructor(location){
        this.location = location
    }   
    get params(){
        const search = this.location.search.substr(1)
        const querySections = search.split('&')
        const result = {}

        querySections.forEach(e => {

            const data = e.split("=")

            result[data[0]] = data[1]

        })

        return result
    }

}

export default Uri 
