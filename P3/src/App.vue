<template>
  <h1>
  {{judul}}
  </h1>
  <input type="text" ref="tes">
  <button @click="handleClick" > tekan </button>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      judul : 'hello :)'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.tes)
      this.$refs.tes.classList.add('ditekan')
      this.$refs.tes.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px ;
}
</style>
