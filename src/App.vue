<script>

import { store } from './store';

export default {

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
    }
  },
  mounted() {
    this.store.callApi(store.API_FILMS_URL)
  },

}
</script>
<template>
  <div class="container">
    <div class="searchBox my-4">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search a film..." v-model="store.searchText"
          @keyup="performSearch()">
        <button class="btn btn-outline-secondary" type="button" @click="performSearch()">Search</button>
      </div>
    </div>
    <ul v-for="film in this.store.films">
      <li> <b>Title: {{ film.title }}</b> </li>
      <li>Original Title: {{ film.original_title }}</li>
      <li>Original Lenguage: {{ film.original_lenguage }}</li>
      <li>Vote: {{ film.vote_average }}</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped></style>