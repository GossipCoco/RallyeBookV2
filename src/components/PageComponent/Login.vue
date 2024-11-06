<template>
  <div class="login-page">
    <div class="col-md-12">
      <div class="card card-container">
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
        />
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input name="username" type="text" class="form-control" v-model="form.login"/>
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input name="password" type="password" class="form-control" v-model="form.password"/>
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">Se connecter</button>
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </form>
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
      let login = this.form.login
      let pwd = this.form.password
      this.$store
        .dispatch("auth/login", {
          Login: login,
          Password: pwd,
        })
        .then(
          () => {
            this.$router.push({ path: "/dashboard" });
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
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
