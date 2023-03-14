<script setup>
import Navigation from '../components/Navigation.vue';
import Projects from '../components/Projects.vue';

</script>

<template>
    <Navigation />
    <main>
        <Projects />
    </main>
</template>
  
<style scoped>
main {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 100%;
}
</style>
  