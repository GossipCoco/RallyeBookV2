<template>
  <div class="row">
    <div class="col-2">
      <img alt="Vue logo" class="logo" src="../public/images/svg/logo.png" />
    </div>
  </div>
  <div class="col-10"></div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
