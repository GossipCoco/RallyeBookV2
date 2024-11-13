<template>
<router-view></router-view>
</template>

<script>
import EventBus from "./HTTP/EventBus";
// import Navbar from './components/Navigation/Navbar.vue';
import jwtAPI from "./api/JwTApi";
import UserService from "./Services/UserService";
export default {
  name: "App",
  // components:{Navbar},
  data() {
    return {
      jwtApi: null,
      user: null,
      userInfo: null,
      usrAPI: null,
      usrRole: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    console.log(
      "Your screen resolution is: " +
        window.innerWidth +
        "x" +
        window.innerHeight
    );
    this.jwtApi = jwtAPI;    
    console.log(this.$store.state.auth.user)
    if (this.$store.state.auth.user === null) {
      this.$router.push("/login");
    } else {
      this.getUser(this.$store.state.auth.user.usrID);
    }
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  methods: {
    getUser(currentUser) {
      console.log(currentUser)
      UserService.getUserById(currentUser)
        .then((response) => {
          this.userInfo = response.data.ob;
        })
        .catch((error) => console.error(error));
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
