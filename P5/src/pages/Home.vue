<template>
<div>
    <h1>
      {{judul}}
    </h1>
</div>
  <div v-if="showModal">
    <Modal :header="header" :text="text" @close="openModal" />
  </div>
  <button @click="openModal">open Modal</button>
  <button @click="kembaliKeLogin">Log Out</button>
</template>

<script>

import Modal from '../components/Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      judul : "hello :)",
      header : "Modal Content",
      text   : " ini adalah custom modal",
      showModal : false
    }
  },
  methods : {
    handleClick() {
      console.log(this.$refs.tes)
      this.$refs.tes.classList.add('abc')
      this.$refs.tes.focus()
    },
    openModal() {
      this.showModal = !this.showModal
    },
    kembaliKeLogin() {
        this.$router.push('/Login')
    }
  }
}
</script>

<style>

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
