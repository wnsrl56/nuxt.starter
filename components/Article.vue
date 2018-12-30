<template>
  <div>
    <h1> Hello, {{ text }}</h1>
  </div>
</template>
<script>
  export default {
    name: 'Article',
    props: {
      text : {
        type: String,
        default: '435345ㅈ'
      },
    },
    created() {
      console.log('test')
    }
  }
</script>

<style scoped>

</style>