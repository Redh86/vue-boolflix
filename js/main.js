var app = new Vue ({
    el: "#app",
    data: {
        movies: [],
        find: ""
    },

    methods: {
        srch() {
            const self = this
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=14c79cb15a17f3680279c4003fdc0fdc&query=" + this.find)
                .then((result) => {
                    console.log(result)
                this.movies = result.data.results;
                console.log(this.movies)
            })   
        }
    } 
})