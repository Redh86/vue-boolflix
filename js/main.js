var app = new Vue ({
    el: "#app",
    data: {
        moviesTv: [],
        find: ""
    },
    mounted() {
        
    },

    methods: {
        srch() {
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=14c79cb15a17f3680279c4003fdc0fdc&query=" + this.find)
                .then((result) => {                              
                    this.moviesTv.forEach(element => {
                        element.vote_average = Math.ceil(parseInt(element.vote_average) / 2);
                    });
                    this.moviesTv = this.moviesTv.concat(result.data.results); 
                });
                            
            axios
                .get("https://api.themoviedb.org/3/search/tv?api_key=14c79cb15a17f3680279c4003fdc0fdc&query=" + this.find)
                .then((result) => {                            
                    this.moviesTv.forEach(element => {
                        element.vote_average = Math.ceil(parseInt(element.vote_average) / 2);
                    });
                    this.moviesTv = this.moviesTv.concat(result.data.results); 
                });   
        }
    } 
})