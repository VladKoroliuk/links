import statisticsModel from '../model/Statistics.js'
import statisticsView from '../view/Statistics.js'


class Statistics{
    
    view = new statisticsView()
    model = new statisticsModel(this.view)
    
    async init(){
        this.view.initCharts()

        const data = await this.model.connect()

        return data
    }
}

export default Statistics