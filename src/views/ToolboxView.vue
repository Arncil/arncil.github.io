<script setup>
import Navigation from '../components/Navigation.vue';
import Toolbox from '../components/Toolbox.vue';
import { ref, onMounted } from 'vue';
const navHeight = ref(0);
onMounted(() => navHeight.value = document.getElementById('nav').offsetHeight);
window.addEventListener('resize', () => navHeight.value = document.getElementById('nav').offsetHeight);
</script>

<template>
    <Navigation id="nav" />
    <main :style="{ minHeight: `calc(var(--vh, 1vh) * 100 - ${navHeight}px)` }">
        <Toolbox />
    </main>
</template>
  
<style scoped>
main {
    min-height: 100vh;
    /* min-height: calc(var(--vh, 1vh) * 100); */
    display: grid;
    place-items: center;
}
</style>
  