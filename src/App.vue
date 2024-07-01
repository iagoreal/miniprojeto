<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
}
</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar/>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

header {
  height: fit-content;
  width: 100%;
}

body {
  height: 100vh;
  width: 100vh;
}

</style>
