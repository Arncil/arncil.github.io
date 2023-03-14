<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <RouterView />
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
  position: relative;
}

div::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      hsl(0, 0%, 12%),
      hsl(0, 0%, 4%),
      hsl(0, 0%, 12%),
      hsl(0, 0%, 20%),
      hsl(0, 0%, 12%));
  background-size: 200%;
  animation: bg-move 30s linear infinite;
  z-index: -1;
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