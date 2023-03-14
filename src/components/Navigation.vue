<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <Transition name="navigation" appear>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/toolbox">Toolbox</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>
    </Transition>
</template>

<style scoped>
nav {
    display: flex;
    width: 50%;
    left: 50%;
    position: sticky;
    top: 0;
    justify-content: space-around;
    z-index: 100;

}

a {
    font-size: 2.5vw;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}


.navigation-enter-active,
.navigation-leave-active {
    transition: all 1.5s ease;
}

.navigation-enter-from,
.navigation-leave-to {
    transform: translateX(-500px);
    opacity: 0;
}

@media (max-width: 500px) {
    nav {
        width: 100%;
        left: 0;
    }

    a {
        font-size: 4vw;
    }
}
</style>