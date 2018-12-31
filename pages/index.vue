<template>
  <MainView class="main-view" />
</template>
<script>
  import MainView from "../components/Viewport.vue"

  export default {
    components: {
      MainView,
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style>
  .main-view {
    width: 100%;
    height: 100%;
  }
</style>
