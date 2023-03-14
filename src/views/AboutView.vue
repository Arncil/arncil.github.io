<script setup>
import Navigation from '../components/Navigation.vue';

</script>

<template>
  <Navigation />
  <main>
    <h1>This is the about page</h1>
  </main>
</template>

<style scoped>
main {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
