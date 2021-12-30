import Base from './Base.js'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
class StatisticsView extends Base {

    #defaultChartOptions = {
        responsive: true,
    }
    #backgroundColors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(24, 196, 70)',
        'rgb(27, 40, 224)',
        'rgb(163, 13, 58)',
        'rgb(192, 88, 237)',
        'rgb(209, 85, 19)',
    ]

    #charts = {}
    removePreloader() {
        document.getElementsByClassName('lds-wrap')[0].style.display = 'none'
        document.getElementsByClassName('stat-content')[0].style.display = 'flex'
    }
    updateData(count, data) {
        this.removePreloader()
        document.getElementById('transitions-count').innerHTML = count
        this.updateCharts(data)
    }

    initCharts() {
        this.#charts = {
            browsers: new Chart(document.getElementById('browsersChart').getContext('2d'), { type: 'pie', data: {datasets: [{}]}, options: this.#defaultChartOptions }),
            os: new Chart(document.getElementById('osChart').getContext('2d'), { type: 'pie', data: {datasets: [{}]}, options: this.#defaultChartOptions })
        }

    }
    updateCharts(data) {
        for (let chart in this.#charts) {
            this.#charts[chart].data.labels = data[chart].labels
            this.#charts[chart].data.datasets[0].data = data[chart].data
            this.#charts[chart].data.datasets[0].backgroundColor = this.#backgroundColors
            this.#charts[chart].update()
        }
    }
}

export default StatisticsView