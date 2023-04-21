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
         <h2 :class="this.store.films != 0 && this.store.films != null ? 'd-block text-light my-4' : 'd-none'">Movies</h2>
         <div class="row row-cols-5">
            <FilmItem />
         </div>
      </div>
   </section>
   <!-- /#movies_sec -->
   <section id="series_sec">
      <div class="container">
         <h2 :class="this.store.series != 0 && this.store.series != null ? 'd-block text-light my-4' : 'd-none'">Series
         </h2>
         <div class="row row-cols-5">
            <SeriesItem />
         </div>
      </div>
   </section>
   <!-- /#series_sec -->
</template>


<style lang="scss" scoped></style>