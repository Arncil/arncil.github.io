<script setup>
import { RouterLink } from 'vue-router';
import Introduction from '../components/Introduction.vue';
import GlowingBox from '../components/GlowingBox.vue';

</script>

<template>
  <main>
    <div class="introduction">
      <Introduction />
    </div>

    <Transition name="image" appear>
      <div class="image">
        <img src="/portfolio-website/images/avatar.png" alt="Miłosz's Avatar">
      </div>
    </Transition>
    <div class="GlowingBox">
      <RouterLink to="/projects">
        <GlowingBox path="/portfolio-website/icons/projects.svg" category="Projects" description="how I spend my days" />
      </RouterLink>

      <RouterLink to="/toolbox">
        <GlowingBox path="/portfolio-website/icons/toolbox.svg" category="Toolbox"
          description="what I use to do the magic" />
      </RouterLink>

      <RouterLink to="/about">
        <GlowingBox path="/portfolio-website/icons/about.svg" category="About"
          description="why I choose to do this stuff" />
      </RouterLink>

      <RouterLink to="/contact">
        <GlowingBox path="/portfolio-website/icons/contact.svg" category="Contact" description="where I can be found" />
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
}

a {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
}


.image-enter-active {
  -webkit-animation: slide-in-elliptic-left-bck 0.7s 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-elliptic-left-bck 0.7s 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.image-leave-active {
  -webkit-animation: slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
  animation: slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

@-webkit-keyframes slide-in-elliptic-left-bck {
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

@-webkit-keyframes wobble-hor-top {

  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
    transform: translateX(-30px) rotate(6deg);
  }

  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
    transform: translateX(15px) rotate(-6deg);
  }

  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
    transform: translateX(-15px) rotate(3.6deg);
  }

  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
    transform: translateX(9px) rotate(-2.4deg);
  }

  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
    transform: translateX(-6px) rotate(1.2deg);
  }
}

@keyframes wobble-hor-top {

  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
    transform: translateX(-30px) rotate(6deg);
  }

  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
    transform: translateX(15px) rotate(-6deg);
  }

  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
    transform: translateX(-15px) rotate(3.6deg);
  }

  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
    transform: translateX(9px) rotate(-2.4deg);
  }

  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
    transform: translateX(-6px) rotate(1.2deg);
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
