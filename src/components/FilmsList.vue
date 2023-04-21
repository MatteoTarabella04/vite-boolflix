<script>
import { store } from '../store';
import FilmItem from './FilmItem.vue';
import SeriesItem from './SeriesItem.vue';
export default {

   components: { FilmItem, SeriesItem },

   data() {
      return {
         store,
      }
   },
   methods: {
   },
}
</script>
<template>
   <section id="movies_sec">
      <div class="container">
         <h2 class="text-light text-center">Movies</h2>
         <div class="row row-cols-5">
            <FilmItem />
         </div>
      </div>
   </section>
   <!-- /#movies_sec -->
   <section id="series_sec">
      <div class="container">
         <h2 class="text-light text-center">Series</h2>
         <div class="row row-cols-5">
            <SeriesItem />
         </div>
      </div>
   </section>
   <!-- /#series_sec -->
</template>


<style lang="scss" scoped></style>