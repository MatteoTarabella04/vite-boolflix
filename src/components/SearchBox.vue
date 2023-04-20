<script>
import { store } from '../store';
export default {

   name: 'SearchBox',

   data() {
      return {
         store,
      }
   }

}
</script>
<template>
   <div class="searchBox my-4">
      <div class="input-group mb-3">
         <input type="text" class="form-control" placeholder="Search a film..." v-model="store.searchText">
         <button class="btn btn-outline-secondary" type="button" @click="$emit('search')">Search</button>
      </div>
   </div>
</template>


<style lang="scss" scoped></style>