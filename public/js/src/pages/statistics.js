import navigation from '../includes/navigation.js'
import app from '../../app.js'
import statisticsController from '../controller/Statistics.js'

app.main = async () => {

    navigation.init()

    const controller = new statisticsController()

    await controller.init()

    

}



app.init()