<script>
import { store } from '../store';
export default {
   name: 'FilmList',

   data() {
      return {
         store,
      }
   }


}
</script>
<template>
   <ul v-for="film in this.store.films">
      <li v-if="film.title == 'title'"> <b>Title: {{ film.title }}</b> </li>
      <li v-else> <b>Title: {{ film.name }}</b> </li>
      <li v-if="film.original_title == 'original_title'"> Original Title: {{ film.original_title }}</li>
      <li v-else>Original Title: {{ film.original_name }} </li>
      <!-- <li>Original Title: {{ film.original_title }}</li> -->
      <li v-if="film.original_language == 'en'">
         Original Language: <img src="https://flagcdn.com/w20/gb.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'ar'">
         Original Language: <img src="https://flagcdn.com/w20/ae.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'el'">
         Original Language: <img src="https://flagcdn.com/w20/gr.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'ja'">
         Original Language: <img src="https://flagcdn.com/w20/jp.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'zh'">
         Original Language: <img src="https://flagcdn.com/w20/cn.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'ko'">
         Original Language: <img src="https://flagcdn.com/w20/kr.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'ta'">
         Original Language: <img src="https://flagcdn.com/w20/in.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'hi'">
         Original Language: <img src="https://flagcdn.com/w20/in.png" width="20" :alt="film.original_language">
      </li>
      <li v-else-if="film.original_language == 'uk'">
         Original Language: <img src="https://flagcdn.com/w20/ua.png" width="20" :alt="film.original_language">
      </li>
      <li v-else>
         Original Language: <img :src="`https://flagcdn.com/w20/${film.original_language}.png`" width="20"
            :alt="film.original_language">
      </li>
      <!-- <li v-else>Original Language: {{ film.original_language }}</li> -->
      <li>Vote: {{ film.vote_average }}</li>
   </ul>
</template>


<style lang="scss" scoped></style>