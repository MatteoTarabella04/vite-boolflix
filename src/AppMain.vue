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
      performSearch(url) {
         console.log(this.store.searchText);
         const searchUrl = url + `&query=${this.store.searchText}`;
         this.store.callApi(searchUrl);
      },
   },
   mounted() {
      this.store.callApi(store.API_FILMS_URL)
   },

}
</script>
<template>
   <div class="container">
      <SearchBox @search="performSearch(this.store.API_FILMS_URL), performSearch(this.store.API_SERIES_URL)" />
      <FilmsList />
   </div>
</template>


<style lang="scss" scoped></style>