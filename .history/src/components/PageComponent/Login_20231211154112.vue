<template>
  <div class="login-page">
    <div class="col-md-12">
      <div class="card card-container">
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
        />
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="form-group">
            <label for="username">Username</label>
            <input name="username" type="text" class="form-control" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading" @click="login">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button>
          </div>

          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>

import JwtApi from "../../api/JwTApi";
export default {
  name: "Login",
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
      falsePassword: null,
    };
  },
  created() {
    this.$store.state.auth.user === null;
    JwtApi.IsLogged();
  },
  methods: {
    login(e) {
      e.preventDefault();
      // let login = this.form.login;
      // let pwd = this.form.password;
      console.log("test", this.form);

      this.$router.push({ path: "/home/Dashboard" });
      
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.login = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
