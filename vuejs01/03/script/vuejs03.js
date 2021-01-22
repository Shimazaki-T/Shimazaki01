new Vue({
    el: '#app',
    data() {
        return {
            count: 1,
            show: true
        };
    },

    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        zeropoint() {
            this.count = 0;
        },
        onepoint() {
            this.count = 1;
        },
        twopoint() {
            this.count = 2;
        },
        threepoint() {
            this.count = 3;
        },
        fourpoint() {
            this.count = 4;
        },
        fivepoint() {
            this.count = 5;
        }
    }
});