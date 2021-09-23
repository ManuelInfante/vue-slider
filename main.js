Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data:{
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg',
        ]
    },
    methods: {
        prevPhoto() {
            this.counterPhoto -= 1;
            if (this.counterPhoto < 0){
                this.counterPhoto = (this.photos.length - 1);
            };
        },

        nextPhoto() {
            this.counterPhoto += 1;
            if(this.counterPhoto == (this.photos.length)){
                    this.counterPhoto = 0;
            };
        },
    },
});