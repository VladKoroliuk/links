import config from '../config.js'

class Server{

    #apiLink = config.api.link
    #mode = 'same-origin'

    async request( url, method, data = {} ){

        const options = {
            method,
            mode: this.#mode,
            headers: new Headers({
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        if(method == "GET"){
          delete options.body
        }

        const response = await fetch(this.#apiLink+url, options)
        
          console.log(response)

          return response
            
    }
}

export default Server