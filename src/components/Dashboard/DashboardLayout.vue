<template>
  <div class="row">
    <div class="col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <h1>Bienvenue sur votre dashboard {{ user.Username }}</h1>
    </div>
  </div>
</template>
<script>
import UserService from "../../Services/UserService";
export default {
  name: "DashboardLayout",
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