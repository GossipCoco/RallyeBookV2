<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img src="../public/images/Logo/logo-02png.png" alt="Novel Writing Planner Logo" />
      </div>      
    </div>
    <div class="row">      
      <div class="col-12">
      <router-view></router-view>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
