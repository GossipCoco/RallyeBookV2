<template>
  <div>
    <h1>Bienvenue sur votre dashboard</h1>
  </div>
</template>
<script>
import UserService from "../../Services/UserService";
export default {
  name: "DashboardLayout",
  data() {
    return {
      usrId: this.$store.state.auth.user.usrID,
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
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>