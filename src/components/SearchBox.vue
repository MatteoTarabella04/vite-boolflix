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
   <div class="searchBox d-flex gap-4 align-items-center">
      <div class="input-group">
         <input type="text" class="form-control bg-dark border-danger text-light" placeholder="Search"
            v-model="store.searchText">
         <button class="btn btn-outline-danger" type="button" @click="$emit('search')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
               viewBox="0 0 16 16">
               <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
         </button>
      </div>
      <div class="bell dropdown">
         <button id="dropdownBell" class="btn text-white" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell"
               viewBox="0 0 16 16">
               <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
         </button>
         <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownBell">
            <li><a href="#" class="dropdown-item">News</a></li>
            <li><a href="#" class="dropdown-item">News</a></li>
            <li><a href="#" class="dropdown-item">News</a></li>
         </ul>
      </div>
      <div class="profile dropdown">
         <button id="dropdownProfile" class="btn text-white p-0">
            <img src="../assets/img/avatar_batman.png" alt="avatar" class="img-fluid">
         </button>
         <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownProfile">
            <li class="d-flex">
               <a href="#" class="dropdown-item">
                  <img src="../assets/img/avatar_batman.png" alt="avatar" width="30" class="img-fluid">
                  Profile 1
               </a>
            </li>
            <li class="d-flex">
               <a href="#" class="dropdown-item">
                  <img src="../assets/img/avatar_batman.png" alt="avatar" width="30" class="img-fluid">
                  Profile 2
               </a>
            </li>
            <li class="d-flex">
               <a href="#" class="dropdown-item">
                  <img src="../assets/img/avatar_batman.png" alt="avatar" width="30" class="img-fluid">
                  Profile 3
               </a>
            </li>
         </ul>
      </div>
   </div>
</template>


<style lang="scss" scoped>
.dropdown:hover>.dropdown-menu {
   display: block;
}
</style>