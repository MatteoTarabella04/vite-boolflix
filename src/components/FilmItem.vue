<script>
import { store } from '../store';
export default {
   name: 'FilmItem',

   data() {
      return {
         store,
      }
   }, methods: {
      transformVote(vote) {
         return Math.ceil(vote / 2)
      },
      isFilm(film) {
         if ((film.title) || (film.original_title)) {
            return true
         }
      }
   }


}
</script>
<template>
   <div v-for="film in this.store.films" class="col mb-3">
      <div class="card rounded-0">
         <ul class="list-unstyled p-2">

            <!-- Info -->
            <li><img :src="store.posterPath + film.poster_path" alt="" class="img-fluid"></li>
            <li v-if="isFilm(film)"> <b>Title: {{ film.title }}</b> </li>
            <li v-else> <b>Title: {{ film.name }}</b> </li>
            <li v-if="isFilm(film)"> Original Title: {{ film.original_title }}</li>
            <li v-else>Original Title: {{ film.original_name }} </li>

            <!-- Flags -->
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

            <!-- Stars -->
            <li>
               <svg v-for="num in transformVote(film.vote_average)" xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path
                     d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
               </svg>
               <svg v-for="nuum in (5 - transformVote(film.vote_average))" xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path
                     d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
               </svg>
            </li>
         </ul>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.card {
   min-height: 100%;
}
</style>