<template>
    <div class="container-fluid">
      <HeaderAccueil />
      
      <main class="container-fluid height-100 display-flex-column main-global-container">
        <router-view></router-view>
      </main>
    </div>
  </template>
  <script>
  import EventBus from "../../HTTP/EventBus";
  import UserService from "../../Services/UserService";
  import jwtAPI from "../../api/JwTApi";
  // import Navbar from "../Navigation/Navbar.vue";
  import HeaderAccueil from "./Accueil/HeaderAccueil.vue";
  export default {
    name: "Accueil",
    components: { HeaderAccueil },data() {
      return {
        publicPath: process.env.BASE_URL,
        usrJob: null,
        userCurrent: null,
        usrCurrent: null,
        messageTestProvide: "Hello!",
        jwtApi: null,
        user: null,
        userInfo: null,
        Avatar: null,
      };
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user.usrID;
      },
    },
    created() {
      this.jwtApi = jwtAPI;
      this.userCurrent = this.$store.state.auth.user.usrID;
      this.getUser(this.userCurrent);
      if (!this.currentUser) {
        this.$router.push("/Accueil");
      }
      this.jwtApi = jwtAPI.IsLogged
      EventBus.on("logout", () => {
        this.logOut();
      });
    },
    mounted() {},
    methods: {
      getUser(e) {
        UserService.getUserById(e)
          .then((response) => {
            this.userInfo = response.data.ob;
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
  };
  </script>