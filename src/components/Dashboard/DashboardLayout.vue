<template>
  <main>
    <div class="row">
      <div class="col-1 col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
        <SideBar />
      </div>
      <div class="col-11 col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
        <div class="card">
          <h1>Bienvenue sur votre dashboard {{ user.Username }}</h1>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import UserService from "../../Services/UserService";
import SideBar from "../Navigation/SideBar.vue";
export default {
  name: "DashboardLayout",
  components: { SideBar },
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
      user: {},
    };
  },
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    GetUserById(e) {
      this.showspinner = true;
      UserService.getUserById(e)
        .then((response) => {
          console.log(response.data.ob);
          this.user = response.data.ob;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>