<template>
  <div class="card welcome-user-card">
    <div class="card-header">
        <h1>Bienvenue sur votre dashboard {{ user.Username }}</h1>
    </div>
    <div class="card-body"></div>
  </div>

</template>
<script>
export default {
  name: "WelcomeUserCard",
  props: ["user"],
};
</script>