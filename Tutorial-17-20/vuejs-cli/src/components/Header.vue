<template>
    <header>
        <h1> {{ title }} </h1>
        <button v-on:click="changeTitle">Change Title via Prop</button>
        <button v-on:click="changeTitleBus">Change Title via Bus</button>

    </header>    
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
        }
    },
    methods: {
        changeTitle: function() {
            this.$emit('changeTitle', 'Vue Application');
        },
        changeTitleBus: function() {
            this.title = 'Vue Wizards'
            bus.$emit('changeTitleBus', this.title);
        }
    }
}
</script>

<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>