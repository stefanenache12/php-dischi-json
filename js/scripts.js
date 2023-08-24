const { createApp } = Vue;

createApp({
    data() {
        return {
            albums:[],
            selectedAlbum: {},
        }
    },
    created() {

        axios
            .get('http://localhost/php-dischi-json/server/api.php')
            .then(response => {
                this.albums = response.data;
            })
            .catch(error => {
                console.error('Error server:', error);
            });
    },
    methods: {
        showAlbumInfo(album) {
            this.selectedAlbum = album; 
        },
    },
}).mount('#app');