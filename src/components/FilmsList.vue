<script>
import { store } from '../store';
import FilmItem from './FilmItem.vue';
export default {

   components: { FilmItem, },

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
   <div class="container">
      <div class="row row-cols-5">
         <FilmItem />
      </div>
   </div>
</template>


<style lang="scss" scoped></style>