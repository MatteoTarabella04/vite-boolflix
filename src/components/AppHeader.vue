<script>
import { store } from '../store';
import SearchBox from './SearchBox.vue';
export default {

   name: 'AppHeader',

   components: { SearchBox },

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
   <header id="app_header" class="bg-black">
      <div class="container h-100">
         <nav class="d-flex gap-2 justify-content-between text-white align-items-center h-100">
            <div class="right_sec d-flex gap-2 align-items-center">
               <div class="logo me-5">
                  <h1 class="text-danger">BOOLFLIX</h1>
               </div>
               <div class="menu">
                  <ul class="list-unstyled m-0 d-flex align-items-center gap-3">
                     <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                     <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                     <li><a href="#" class="text-light text-decoration-none">Home</a></li>
                  </ul>
               </div>
            </div>
            <div class="left_sec">
               <SearchBox @search="performSearch(this.store.API_FILMS_URL, this.store.API_SERIES_URL)" />
            </div>
         </nav>
      </div>
   </header>
   <!-- /#app_header -->
</template>


<style lang="scss" scoped>
#app_header {
   height: 60px;
}
</style>