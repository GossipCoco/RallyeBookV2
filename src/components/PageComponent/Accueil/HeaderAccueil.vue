<template>
<header data-bs-theme="dark">
    <nav class="navbar align-items-content-justify-content navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid height-100 header-container overflowY-X-hidden overflow-hidden">
            <div class="logo">
                <img src="../../../../public/images/Logo/NWP-logo-04png.png" />
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item roboto text-white"  v-if="isLoggedIn">
                <router-link to="/dashboard">Aller sur son Dashboard</router-link>
              </li>
              <li class="nav-item logout-li-container roboto text-white" v-if="isLoggedIn">
                <a href="#" @click.prevent="logout" class="logout-li-container roboto text-white">
                    Logout 
                </a>
              </li>
            </ul>
        </div>
    </nav>
</header>

</template>
<script>
export default {
  name: "HeaderAccueil",
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.user !== null;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
