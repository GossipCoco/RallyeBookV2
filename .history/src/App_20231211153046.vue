<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <h1>Novel Writing Planner</h1>
      </div>
      <div class="col-10"></div>
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
