var app = new Vue ({
    el: "#app",
    data: {
        moviesTv: [],
        find: "",
        
    },//chiusuradata
    methods: {
        srch() {
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=14c79cb15a17f3680279c4003fdc0fdc&query=" + this.find)
                .then((result) => {       
                    this.moviesTv = this.moviesTv.concat(result.data.results);  
                });
                            
            axios
                .get("https://api.themoviedb.org/3/search/tv?api_key=14c79cb15a17f3680279c4003fdc0fdc&query=" + this.find)
                .then((result) => {                                    
                    this.moviesTv = this.moviesTv.concat(result.data.results);      
                });  
        },
        starVote(vote){
            return parseInt(vote / 2);
        },
        poster(post){
            return ("https://image.tmdb.org/t/p/w300" + post);
        },
        flag(lang){
            return "img/" + lang + ".png";
        },
        
    } //chiusuramethods          
}) //chiusura vue