<template>
  <div class="navbar-container d-flex flex-column flex-shrink-0">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a
          href="#"
          class="nav-link py-3 border-bottom rounded-0"
          aria-current="page"
          title="Home"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 54 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M53.9812 23.9531C53.9812 25.6406 52.575 26.9625 50.9812 26.9625H47.9812L48.0469 41.9812C48.0469 42.2344 48.0281 42.4875 48 42.7406V44.25C48 46.3219 46.3219 48 44.25 48H42.75C42.6469 48 42.5438 48 42.4406 47.9906C42.3094 48 42.1781 48 42.0469 48H39H36.75C34.6781 48 33 46.3219 33 44.25V42V36C33 34.3406 31.6594 33 30 33H24C22.3406 33 21 34.3406 21 36V42V44.25C21 46.3219 19.3219 48 17.25 48H15H12.0094C11.8688 48 11.7281 47.9906 11.5875 47.9812C11.475 47.9906 11.3625 48 11.25 48H9.75C7.67812 48 6 46.3219 6 44.25V33.75C6 33.6656 6 33.5719 6.00937 33.4875V26.9625H3C1.3125 26.9625 0 25.65 0 23.9531C0 23.1094 0.28125 22.3594 0.9375 21.7031L24.975 0.75C25.6312 0.09375 26.3812 0 27.0375 0C27.6937 0 28.4437 0.1875 29.0062 0.65625L52.95 21.7031C53.7 22.3594 54.075 23.1094 53.9812 23.9531Z"
            />
          </svg>
        </a>
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
            class="bi pe-none"
            width="24"
            height="24"
            role="img"
            aria-label="Dashboard"
          >
            <use xlink:href="#speedometer2" />
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
export default {
  name: "SideBar",
};
</script>