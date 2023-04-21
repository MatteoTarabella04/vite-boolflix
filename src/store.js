import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
   searchText: '',
   API_FILMS_URL: 'https://api.themoviedb.org/3/search/movie?api_key=7be289e2af34e97e1f3298980f1e7502',
   API_SERIES_URL: 'https://api.themoviedb.org/3/search/tv?api_key=7be289e2af34e97e1f3298980f1e7502',
   posterPath: 'https://image.tmdb.org/t/p/w342/',
   films: null,
   series: null,

   callApiFilms(url) {
      axios
         .get(url)
         .then(response => {
            console.log(response);
            this.films = response.data.results;
            console.log(this.films);
         })
         .catch(err => {
            console.log(err);
            console.error(err.message);
         })
   },
   callApiSeries(url) {
      axios
         .get(url)
         .then(response => {
            console.log(response);
            this.series = response.data.results;
            console.log(this.series);
         })
         .catch(err => {
            console.log(err);
            console.error(err.message);
         })
   },
   transformVote(vote) {
      return Math.ceil(vote / 2)
   },
})