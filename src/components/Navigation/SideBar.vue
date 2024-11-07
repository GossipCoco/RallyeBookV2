<template>
    <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary" style="width: 4.5rem; height: 83.5vh; background-color: black;">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a href="#" class="nav-link py-3 border-bottom rounded-0" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src="../../../public/images/icons/home.svg" />
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Dashboard"><use xlink:href="#speedometer2"/></svg>
        </a>
      </li>
      
    </ul>
    <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name: 'SideBar'
}
</script>