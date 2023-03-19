<script setup>
import { RouterLink } from 'vue-router';
import Introduction from '../components/Introduction.vue';
import GlowingBox from '../components/GlowingBox.vue';

const imgPath = '/images/avatar.png';
</script>

<template>
  <main>
    <div class="introduction">
      <Introduction />
    </div>
    <div class="image">
      <img :src="imgPath" alt="Miłosz's Avatar">
    </div>
    <div class="GlowingBox">
      <RouterLink to="/projects">
        <GlowingBox path="/icons/projects.svg" category="Projects" description="how I spend my days" />
      </RouterLink>

      <RouterLink to="/toolbox">
        <GlowingBox path="/icons/toolbox.svg" category="Toolbox"
          description="what I use to do the magic" />
      </RouterLink>

      <RouterLink to="/about">
        <GlowingBox path="/icons/about.svg" category="About"
          description="why I choose to do this stuff" />
      </RouterLink>

      <RouterLink to="/contact">
        <GlowingBox path="/icons/contact.svg" category="Contact" description="where I can be found" />
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vmin 2fr 3fr 10vmin;
  place-items: center;
}

.GlowingBox {
  grid-row: 2/4;
  grid-column: 2/2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 100%;
  max-width: 40vw;
  aspect-ratio: 1;
}

.introduction {
  grid-row: 2/2;
  grid-column: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  grid-row: 3/3;
  grid-column: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 20vw;
  -webkit-filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.5));
  filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.5));
  animation: slide-in-elliptic-left-bck 0.7s 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

a {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
}

@keyframes slide-in-elliptic-left-bck {
  0% {
    -webkit-transform: translateX(-800px) rotateY(-30deg) scale(6.5);
    transform: translateX(-800px) rotateY(-30deg) scale(6.5);
    -webkit-transform-origin: 200% 50%;
    transform-origin: 200% 50%;
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -600px 50%;
    transform-origin: -600px 50%;
    opacity: 1;
  }
}

@media (max-width: 930px) {

  main {
    grid-template-rows: 40vw 1fr 100vw;
    grid-template-columns: 1fr;
  }

  .GlowingBox {
    width: 90vw;
    max-width: 90vw;
    grid-row: 3/3;
    grid-column: 1/1;
  }

  .introduction {
    grid-row: 2/2;
    grid-column: 1/1;
  }

  .image {
    grid-row: 1/1;
    grid-column: 1/1;
  }

  img {
    height: 30vw;
  }

}
</style>
