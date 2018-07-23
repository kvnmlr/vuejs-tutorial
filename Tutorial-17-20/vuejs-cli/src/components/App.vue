<template>
<div>
    <app-header></app-header>
    <ninjas></ninjas>
    <app-footer></app-footer>
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
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>