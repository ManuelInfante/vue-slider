Vue.config.devtools = true;

const DURATION = 2 * 1000;

const app = new Vue({
    el: '#app',
    data:{
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg',
        ],
        playVisible: true,
        idInterval: null,
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowRight'){
                this.nextPhoto();
            } else if (e.key == 'ArrowLeft') {
                this.prevPhoto();
            }
        });
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

        toggleVisibility() {
            this.playVisible = !this.playVisible;
            this.startStopSlider();
        },

        startStopSlider() {
            if (!this.playVisible){
               this.idInterval = setInterval(() => this.nextPhoto(), DURATION);
            } else {
                clearInterval(this.idInterval);
            }
        },

        changePhoto(index) {
            this.counterPhoto = index;
        }
    },
});