<script setup>
import { RouterLink } from 'vue-router';
import Introduction from '../components/Introduction.vue';
import GlowingBox from '../components/GlowingBox.vue';
import Image from '../components/Image.vue';

</script>

<template>
  <main>
    <div class="introduction">
      <Introduction />
    </div>
    <div class="image">
      <Image path="/portfolio-website/images/avatar.png" alt="Miłosz's Avatar" />
    </div>
    <div class="GlowingBox">
      <RouterLink to="/projects">
        <GlowingBox to="/projects" path="/portfolio-website/icons/projects.svg" category="Projects"
          description="how I spend my days" />
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
}

a {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
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
