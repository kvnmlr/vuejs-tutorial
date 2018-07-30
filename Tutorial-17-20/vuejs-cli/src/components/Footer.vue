<template>
    <footer>
        <p>{{title}}, {{copyright}}</p>
    </footer>
</template>

<script>
import { bus } from '../main';

export default {
    props: {
        title: {
            type: String,
        }
    },
    data () {
        return {
            copyright: 'Copyright 2018'
        }
    },
    methods: {
    },
    created(){
        //bus event listener
        bus.$on('changeTitleBus', (data) => {
            this.title = data;
        });
    }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>