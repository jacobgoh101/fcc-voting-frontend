<script>
import { Doughnut } from 'vue-chartjs'
const randomMC = require('random-material-color');

export default Doughnut.extend({
    props: ['chartData'],
    computed: {
        data() {
            return this.chartData.data;
        },
        label() {
            return this.chartData.label;
        },
        backgroundColor() {
            return this.label.map((name) => {
                return randomMC.getColor({ text: name });
            })
        }
    },
    watch: {
        data(data) {
            this.render();
        }
    },
    methods: {
        render() {
            this.renderChart({
                datasets: [{
                    data: this.chartData.data,
                    backgroundColor: this.backgroundColor,
                }],
                labels: this.chartData.label,
            })
        }
    },
    mounted() {
        this.render();
    }
})
</script>