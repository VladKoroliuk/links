import transitionModel from '../models/transition.js'


class Transition{

    async getData(user){
        return await transitionModel.find({linkCreator: user})
    }
    async getDataByLink(link){
        return await transitionModel.find({link})
    }

}

export default new Transition