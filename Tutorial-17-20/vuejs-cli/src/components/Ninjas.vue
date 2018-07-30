<template>
<div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" :key="ninja.name">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    //props: ['ninjas'],
    props: {
        ninjas: {
            type: Array,
            required: true,
        }
    },
    data(){
        return{
           
        }
    },
    methods: {
    },
    // life cycle hooks
    beforeCreate() {
        console.log('Before create');
    },
    created() {
        // here you would fetch data from the database
        console.log('Created');
    },
    beforeMount() {
        console.log('Before mount');
    },
    mounted() {
        // here the UI is rendered and you would manipulate the DOM
        console.log('Mounted');
    },
    beforeUpdate() {
        console.log('Before update');
    },
    updated() {
        console.log('updated');
    },
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>