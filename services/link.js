import linkModel from '../models/link.js'
import uaParser from 'ua-parser-js'
import transitionModel from '../models/transition.js'
import ApiError from '../exeptions/api-error.js'
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
    async get(user, page = 1){
        const result = await linkModel.paginate({user}, {limit: 12, page})
        return result
    }
    async saveFollowData(ip, userAgent, id){

        const linkData = await linkModel.findOne({key: id})

        if(linkData == null){
            throw ApiError.NotFound() 
        }

        var userData = uaParser(userAgent);

        const transition = await transitionModel.create({
            os: userData.os.name,
            osVersion: userData.os.version,
            browser: userData.browser.name,
            browserVersion: userData.browser.major,
            cpuArchitecture: userData.cpu.architecture,
            ip,
            link: linkData._id,
            linkCreator: linkData.user
        })

        await transition.save()
        return linkData
    }

}


export default new linkService