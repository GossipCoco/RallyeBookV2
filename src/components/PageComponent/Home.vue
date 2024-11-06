<template>
    <main class="row">
      <div class="col-12">
        <router-link to="/login" type="button" class="btn btn-primary">Se connecter</router-link>
        <router-view></router-view>
      </div>
    </main>
</template>
  
  <script>
import UserService from "../../Services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
      user: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>