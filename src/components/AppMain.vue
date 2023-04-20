<script>
import FilmsList from './FilmsList.vue';
export default {

   name: 'AppMain',

   components: { FilmsList, },

   data() {
      return {
      }
   },
}
</script>
<template>
   <main id="app_main">
      <FilmsList />
   </main>
   <!-- /#app_main -->
</template>


<style lang="scss" scoped></style>