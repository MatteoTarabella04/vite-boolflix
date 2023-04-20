<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {

  components: { AppMain, AppHeader },

  data() {
    return {
    }
  }

}
</script>
<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss" scoped>
#app_header {
  height: 60px;
}
</style>