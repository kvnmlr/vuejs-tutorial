new Vue({
    el: '#vue-app',
    data: {
        name: 'Kev',
        job: 'Coder',
        age: 23,
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.google.com">Google</a>',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: true,
        nearby: false,
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name;
        },

        add: function(num) {
            this.age += num;
        },

        subtract: function(num) {
            this.age -= num;
        },

        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function() {
            alert('Clicked');
        },

        logName: function() {
            console.log('You entered your name');
        },

        logAge: function() {
            console.log('You entered your age');
        }
    },

    computed: {
        addToA: function() {
            return this.age + this.a;
        },
        
        addToB: function() {
            return this.age + this.b;
        },

        classes: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }

    }
});

