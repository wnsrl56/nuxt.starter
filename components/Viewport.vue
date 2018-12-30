<template>
  <div class="main">
    <button
      text="test"
      @click="callFn"
    />
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="content">
      <ContentView />
    </div>
  </div>
</template>
<script>
  import ContentView from './ContentView.vue'
  import SideBar from './SideBar.vue'

  export default {
    name: 'Viewport',
    components: {
      ContentView,
      SideBar,
    },
    methods: {
      callFn: () => {
        console.log('test')
      }
    }
  }
</script>

<style>
  .main {
    width: 100%;
    height: 100%;
  }
  .sidebar {
    width: 30%;
  }
  .content {
    width: 70%;
  }
</style>