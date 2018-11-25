import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    mounted() {
        this.renderChart({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sale Data',
                backgroundColor: '#05CBE1',
                data: [60, 55, 32, 10, 2, 12, 53]
            }]
        }, {
            responsive: true,
            maintainAspectRatio: false
        })
    }
}
