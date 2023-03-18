<script setup>
import Navigation from '../components/Navigation.vue';
import About from '../components/About.vue';
import { ref, onMounted } from 'vue';
const navHeight = ref(0);
onMounted(() => navHeight.value = document.getElementById('nav').offsetHeight);
window.addEventListener('resize', () => navHeight.value = document.getElementById('nav').offsetHeight);
</script>

<template>
  <Navigation />
  <main :style="{ minHeight: `calc(var(--vh, 1vh) * 100 - ${navHeight}px)` }">
    <About />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

@media (max-width: 930px) {
  main {
    flex-direction: column;
  }
}
</style>
