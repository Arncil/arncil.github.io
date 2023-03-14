<script setup>
import Navigation from '../components/Navigation.vue';
import Toolbox from '../components/Toolbox.vue';

</script>

<template>
    <Navigation />
    <main>
        <!-- <h1>This is the toolbox page</h1> -->
        <Toolbox />
    </main>
</template>
  
<style scoped>
main {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    display: grid;
    place-items: center;
}
</style>
  