<template>
<div>
    <app-header v-on:changeTitle="updateTitle($event)" v-bind:title="title"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer v-bind:title="title"></app-footer>
</div>

</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Ninjas from './Ninjas.vue'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'ninjas': Ninjas

    },
    data () {
        return {
            title: "Vue App",
            ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
        }
    },
    methods: {
        updateTitle: function(event) {
            this.title = event
        }
    }
}
</script>

<style scoped>
</style>