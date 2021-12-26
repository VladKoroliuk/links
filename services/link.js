import linkModel from '../models/link.js'
import Sniffr from 'sniffr'
import transitionModel from '../models/transition.js'
class linkService{

    async create(user, url){

        const key = await this.#generateKey()
        const link = await linkModel.create({user, from: url, key})
        return await link.save()

    }
    async #generateKey(){
        const symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
        let key = ''
        do{
            key = ''
            for(let i = 0; i <= 7; i++){
                key = key + symbols.charAt(Math.floor(Math.random() * symbols.length))
            }

        }while(await this.#isKeyExists(key))
        
        return key


    }
    async #isKeyExists(key){

        const candidate = await linkModel.findOne({ key })

        if(candidate != null){
            return true
        }

        return false

    }
    async get(user){

        const links = await linkModel.find({user})

        return links.reverse()

    }
    async saveFollowData(ip, userAgent, id){
        const s = new Sniffr()

        s.sniff(userAgent)

        const linkData = await linkModel.findOne({key: id})
        
        const transition = await transitionModel.create({...s, ip, link: linkData._id})

        await transition.save()

        return linkData.from
    }

}


export default new linkService