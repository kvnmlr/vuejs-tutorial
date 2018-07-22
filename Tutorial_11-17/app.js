Vue.component('greeting', {
    template: '<p>Hey, I am a reusable component for {{name}}. <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {
            name: 'Kevin'
        }
    },

    methods: {
        changeName: function() {
            this.name = "Kev";
        }
    }
})

var appOne = new Vue({
    el: '#vue-app',
    data: {
        title: 'App 1',
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Kev', age: 55},
        ],
        output: 'Your fav food',
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    },

    computed: {
    }
});

var appTwo = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'App 2'
    },
    methods: {
        changeTitle: function(){
            appOne.title = "Title Changed";
        }
    },
});

appTwo.title = "Title Changed from outside";

