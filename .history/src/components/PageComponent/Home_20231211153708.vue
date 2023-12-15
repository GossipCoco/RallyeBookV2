<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Test</h3>
    </header>
    <main class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
  
  <script>
import UserService from "../../Services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
      user: "coco",
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