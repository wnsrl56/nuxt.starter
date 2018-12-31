<template>
  <div class="main">
    <Header />
    <div class="content">
      <button @click="callFn">
        Click me!!
      </button>
      <ContentView />
    </div>
  </div>
</template>
<script>
  import ContentView from './ContentView.vue'
  import Header from './Header.vue'

  export default {
    name: 'Viewport',
    components: {
      ContentView,
      Header,
    },
    methods: {
      callFn() {
        console.log(this.reduce((a,b) => a + b,this.map(v => v * v, this.range(5))));

        this.compose(
          this.range(10),
          this.take(2),
          this.reduce((a,b) => a + b),
          console.log
        )
      },
    },
  }
</script>

<style>
</style>
