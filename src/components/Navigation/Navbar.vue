<template>
<nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div class="container-fluid">
      <router-link  class="nav-link" v-if="!isLoggedIn" to="/">
        <div class="logo">
          <img src="../../../public//images/Logo/NWP-logo.png" />
        </div>
      </router-link>
      <router-link  class="nav-link" v-if="isLoggedIn" to="/Dashboard">
        <div class="logo">
          <img src="../../../public//images/Logo/NWP-logo.png" />
        </div>
      </router-link>      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link  class="nav-link" v-if="!isLoggedIn" to="/login">Se connecter</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" v-if="isLoggedIn" to="/Dashboard">Dashboard</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name:'Navbar',
    computed: {
      isLoggedIn() {
        return this.$store.state.auth.user.usrID !== null;
      },
    },
}
</script>