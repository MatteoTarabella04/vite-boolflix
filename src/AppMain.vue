<script>
import { store } from './store';
import FilmsList from './components/FilmsList.vue';
import SearchBox from './components/SearchBox.vue';
export default {

   components: { FilmsList, SearchBox, },

   data() {
      return {
         store,
      }
   },
   methods: {
      performSearch(urlF, urlS) {
         console.log(this.store.searchText);
         const searchUrlF = urlF + `&query=${this.store.searchText}`;
         const searchUrlS = urlS + `&query=${this.store.searchText}`;
         this.store.callApiFilms(searchUrlF);
         this.store.callApiSeries(searchUrlS);
      },
   },
}
</script>
<template>
   <div class="container">
      <SearchBox @search="performSearch(this.store.API_FILMS_URL, this.store.API_SERIES_URL)" />
      <FilmsList />
   </div>
</template>


<style lang="scss" scoped></style>