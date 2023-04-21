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
   <main id="app_main" class="bg-dark">
      <FilmsList />
   </main>
   <!-- /#app_main -->
</template>


<style lang="scss" scoped>
#app_main {
   height: calc(100vh - 60px);
   overflow-y: auto;
}
</style>