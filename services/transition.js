import transitionModel from '../models/transition.js'


class Transition{

    async getData(user){
        return await transitionModel.find({linkCreator: user})
    }      

}

export default new Transition