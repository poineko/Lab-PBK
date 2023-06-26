<template>
  <form @submit.prevent="masukKeLogin">
    <h3> SignUp </h3>
    <label> Nama </label>
    <input type="nama" required v-model="nama">
    <label> Email </label>
    <input type="email" required v-model="email">
    <label> Password </label>
    <input type="password" required v-model="password">
    <label> Role </label>
    <select v-model="role">
        <option value="mahasiswa"> Sebagai Mahasiswa</option>
        <option value="dosen">Sebagai Dosen </option>
    </select>
    <button class="tombol" type="submit"> Daftar </button>
  </form>
  <p>nama : {{nama}} </p>
  <p>email : {{email}} </p>
  <p>password : {{password}} </p>
  <p>role : {{role}} </p>
</template>

<script>
export default {
  data() {
    return {
      nama: '',
      email: '',
      password: '',
      role: 'mahasiswa',
    }
  },
  methods: {
    masukKeLogin() {
      this.$router.push('/Login')
    }
  }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: rgb(80, 72, 72);
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    h3 {
        text-align: center;
        color: #aaa;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em ;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
       input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555
    }
    .tombol {
        display: block;
        padding: 10px 6px;
        width: 50%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        border-radius: 20px;
        color: #555;
        font-weight: bold;
        margin: 10px auto;
    }
</style>