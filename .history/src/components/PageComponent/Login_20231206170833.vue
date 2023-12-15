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
            <button class="btn btn-primary btn-block" :disabled="loading">
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
export default {
  name: "Login",

  data() {

    return {
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/Home");
    }
  },
  methods: {
    handleLogin(user) {e.preventDefault();
      let login = this.form.login;
      let pwd = this.form.password;
      console.log("test", this.form);

      this.$router.push({ path: "/home/Dashboard" });
      this.$store
        .dispatch("auth/login", {
          Login: login,
          Password: pwd,
        })
        .then(
          (w) => {
            console.log("w", w);
            this.$router.push({ path: "/Home" });
          },
          (error) => {
            if (!error) {
              this.falsePassword = "Login ou Mot de passe incorrect";
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          }
        )
        .catch((errors) => {
          console.log("Cannot log in", errors);
          this.falsePassword = "Login ou Mot de passe incorrect";
        });
    },
  },
};
</script>
