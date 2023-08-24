const { createApp } = Vue;

createApp({
    data() {
        return {
            albums:[],
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
    }
}).mount('#app');