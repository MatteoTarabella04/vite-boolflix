import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
   searchText: '',
   API_FILMS_URL: 'https://api.themoviedb.org/3/search/movie?api_key=7be289e2af34e97e1f3298980f1e7502',
   API_SERIES_URL: 'https://api.themoviedb.org/3/search/tv?api_key=7be289e2af34e97e1f3298980f1e7502',
   films: null,

   callApi(url) {
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
})