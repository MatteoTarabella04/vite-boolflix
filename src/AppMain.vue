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
      performSearch() {
         console.log(this.store.searchText);
         const url = this.store.API_FILMS_URL + `&query=${this.store.searchText}`;
         this.store.callApi(url);
      },
   },
   mounted() {
      this.store.callApi(store.API_FILMS_URL)
   },

}
</script>
<template>
   <div class="container">
      <SearchBox @search="performSearch()" />
      <FilmsList />
   </div>
</template>


<style lang="scss" scoped></style>