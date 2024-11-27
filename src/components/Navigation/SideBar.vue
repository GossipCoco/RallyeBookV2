<template>
  <div class="navbar-container d-flex flex-column flex-shrink-0">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <router-link
          to="/Dashboard"
          class="nav-link py-3 border-bottom rounded-0"
          aria-current="page"
          title="Home"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 54 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M53.9812 23.9531C53.9812 25.6406 52.575 26.9625 50.9812 26.9625H47.9812L48.0469 41.9812C48.0469 42.2344 48.0281 42.4875 48 42.7406V44.25C48 46.3219 46.3219 48 44.25 48H42.75C42.6469 48 42.5438 48 42.4406 47.9906C42.3094 48 42.1781 48 42.0469 48H39H36.75C34.6781 48 33 46.3219 33 44.25V42V36C33 34.3406 31.6594 33 30 33H24C22.3406 33 21 34.3406 21 36V42V44.25C21 46.3219 19.3219 48 17.25 48H15H12.0094C11.8688 48 11.7281 47.9906 11.5875 47.9812C11.475 47.9906 11.3625 48 11.25 48H9.75C7.67812 48 6 46.3219 6 44.25V33.75C6 33.6656 6 33.5719 6.00937 33.4875V26.9625H3C1.3125 26.9625 0 25.65 0 23.9531C0 23.1094 0.28125 22.3594 0.9375 21.7031L24.975 0.75C25.6312 0.09375 26.3812 0 27.0375 0C27.6937 0 28.4437 0.1875 29.0062 0.65625L52.95 21.7031C53.7 22.3594 54.075 23.1094 53.9812 23.9531Z"
            />
          </svg>
        </router-link>
      </li>
      <li>
        <a
          href="#"
          class="nav-link py-3 border-bottom rounded-0"
          title="Dashboard"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 54 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 24C24.1826 24 27.2348 22.7357 29.4853 20.4853C31.7357 18.2348 33 15.1826 33 12C33 8.8174 31.7357 5.76516 29.4853 3.51472C27.2348 1.26428 24.1826 0 21 0C17.8174 0 14.7652 1.26428 12.5147 3.51472C10.2643 5.76516 9 8.8174 9 12C9 15.1826 10.2643 18.2348 12.5147 20.4853C14.7652 22.7357 17.8174 24 21 24ZM16.7156 28.5C7.48125 28.5 0 35.9812 0 45.2156C0 46.7531 1.24688 48 2.78438 48H39.2156C40.7531 48 42 46.7531 42 45.2156C42 35.9812 34.5188 28.5 25.2844 28.5H16.7156Z"
              fill="#FFFFFF"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="logout"
          class="nav-link py-3 border-bottom rounded-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffffff"
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
        </a>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a
        href="#"
        class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="24"
          height="24"
          class="rounded-circle"
        />
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import UserService from '../../Services/UserService';
export default {
  name: "SideBar",
  data() {
    return{      
      usrId: this.$store.state.auth.user.usrID,
    }
  },
  created() {
    this.GetUserById(this.usrId);
  },
  methods: {
    GetUserById(e) {
      UserService.getUserById(e)
        .then((response) => {
          this.role = response.data.ob.Role.Name;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/Accueil");
    },
  }
};
</script>