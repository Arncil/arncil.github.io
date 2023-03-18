<script setup>
import Navigation from '../components/Navigation.vue';
import Contact from '../components/Contact.vue';
import Social from '../components/Social.vue';
import { ref, onMounted } from 'vue';
const navHeight = ref(0);
onMounted(() => navHeight.value = document.getElementById('nav').offsetHeight);
window.addEventListener('resize', () => navHeight.value = document.getElementById('nav').offsetHeight);
</script>

<template>
    <Navigation />
    <main :style="{ minHeight: `calc(var(--vh, 1vh) * 100 - ${navHeight}px)` }">
        <Contact />
        <div class="socials">
            <a href="https://github.com/Arncil" target="_blank">
                <Social icon="mingcute:github-fill" social="GitHub" description="Arncil" />
            </a>
            <a href="https://www.linkedin.com/in/milosz-jackowiak/" target="_blank">
                <Social icon="mingcute:linkedin-fill" social="LinkedIn" description="milosz-jackowiak" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=48785201788" target="_blank">
                <Social icon="mingcute:whatsapp-fill" social="WhatsApp" description="(+48) 785 201 788" />
            </a>
            <a href="https://discordapp.com/users/407535950118387712" target="_blank">
                <Social icon="mingcute:discord-fill" social="Discord" description="Arncil#3020" />
            </a>

        </div>
    </main>
</template>
  
<style scoped>
a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
}

main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.socials {
    width: 40%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    aspect-ratio: 1;
}

@media (max-width: 930px) {
    main {
        flex-direction: column;
    }

    .socials {
        width: 66%;
    }
}
</style>
  