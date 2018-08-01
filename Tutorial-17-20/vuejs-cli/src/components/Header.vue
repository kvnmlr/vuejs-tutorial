<template>
    <header>
        <h1> {{ title }} </h1>
        <button v-on:click="changeTitle">Change Title via Prop</button>
        <button v-on:click="changeTitleBus">Change Title via Bus</button>
        <ul>
            <li>
                <router-link to='/'>Blog</router-link>
            </li>
            <li>
                <router-link to='/list'>List</router-link>
            </li>
            <li>
                <router-link to='/ninjas'>Ninjas</router-link>
            </li>
        </ul>
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
    .router-link-exact-active{
        background-color: aqua
    }
</style>