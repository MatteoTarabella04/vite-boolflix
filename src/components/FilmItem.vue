<script>
import { store } from '../store';
export default {
   name: 'FilmItem',

   data() {
      return {
         store,
      }
   },
}
</script>
<template>
   <div v-for="film in this.store.films" class="col mb-3">
      <div class="card rounded-0">
         <div v-if="film.poster_path == null"
            class="nullPic bg-black text-dark d-flex flex-column justify-content-center text-center ">
            <h2>{{ film.title }}</h2>
            <span class="text-danger opacity-50">No Poster</span>
         </div>
         <img v-else :src="store.posterPath + film.poster_path" alt="" height="350">
      </div>
      <div class="content" id="hidden_content">
         <ul class="list-unstyled p-4">

            <!-- Info -->
            <li> <b>Title:</b> {{ film.title }}</li>
            <li> <b>Original Title:</b> {{ film.original_title }}</li>

            <!-- Flags -->
            <li v-if="film.original_language == 'en'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/gb.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'ar'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/ae.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'el'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/gr.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'ja'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/jp.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'zh'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/cn.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'ko'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/kr.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'ta'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/in.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'hi'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/in.png" width="20" :alt="film.original_language">
            </li>
            <li v-else-if="film.original_language == 'uk'">
               <b>Original Language:</b>
               <img src="https://flagcdn.com/w20/ua.png" width="20" :alt="film.original_language">
            </li>
            <li v-else>
               <b>Original Language:</b>
               <img :src="`https://flagcdn.com/w20/${film.original_language}.png`" width="20"
                  :alt="film.original_language">
            </li>

            <!-- Stars -->
            <li>
               <svg v-for="num in this.store.transformVote(film.vote_average)" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path
                     d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
               </svg>
               <svg v-for="num in (5 - this.store.transformVote(film.vote_average))" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path
                     d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
               </svg>
            </li>
         </ul>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.col {

   .nullPic {
      height: 350px;
   }

   position: relative;

   &:hover {
      .card {
         background-color: black;

         img {
            opacity: 0.1;
         }
      }

      #hidden_content {
         display: block;

         img {
            opacity: 1;
         }
      }

   }

}

.card {
   min-height: 100%;
}

#hidden_content {
   color: white;
   display: none;
   position: absolute;
   top: 30px;
   left: 0;

   img {
      margin-left: 0.5rem;
   }
}
</style>