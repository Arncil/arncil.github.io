<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
div {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg,
            hsl(0, 0%, 12%),
            hsl(0, 0%, 8%),
            hsl(0, 0%, 16%),
            hsl(0, 0%, 8%),
            hsl(0, 0%, 12%));
    background-size: 400%;
    animation: bg-move 30s linear infinite;
}

@keyframes bg-move {
    from {
        background-position: 0
    }

    to {
        background-position: 400%
    }
}
</style>