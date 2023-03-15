<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>

<template>
    <Transition name="navigation" appear>
        <nav id="nav">
            <div class="links">
                <RouterLink to="/">
                    <Icon icon="mingcute:home-2-fill" />
                    <h5 class="link">Home</h5>
                </RouterLink>
                <RouterLink to="/projects">
                    <Icon icon="mingcute:plugin-2-fill" />
                    <h5 class="link">Projects</h5>
                </RouterLink>
                <RouterLink to="/toolbox">
                    <Icon icon="mingcute:terminal-box-fill" />
                    <h5 class="link">Toolbox</h5>
                </RouterLink>
                <RouterLink to="/about">
                    <Icon icon="mingcute:emoji-fill" />
                    <h5 class="link">About</h5>
                </RouterLink>
                <RouterLink to="/contact">
                    <Icon icon="mingcute:whatsapp-fill" />
                    <h5 class="link">Contact</h5>
                </RouterLink>
            </div>
        </nav>
    </Transition>
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    background: linear-gradient(180deg, hsl(0, 0%, 10%), hsl(0, 0%, 15%));
    border-bottom: 1px solid hsl(0, 0%, 20%);
    box-shadow: 0 2px 10px hsl(0, 0%, 10%);
}

img {
    width: 3vw;
    height: 3vw;
}

a {
    font-size: 2.5vw;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

h5 {
    margin-left: 5px;
}

a.router-link-active h5 {
    font-weight: 500;
}

.links {
    width: 60%;
    display: flex;
    justify-content: space-around;
}


.navigation-enter-active {
    -webkit-animation: flip-in-hor-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: flip-in-hor-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.navigation-leave-active {
    -webkit-animation: flip-in-hor-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
    animation: flip-in-hor-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

@-webkit-keyframes flip-in-hor-bottom {
    0% {
        -webkit-transform: rotateX(80deg);
        transform: rotateX(80deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
        opacity: 1;
    }
}

@keyframes flip-in-hor-bottom {
    0% {
        -webkit-transform: rotateX(80deg);
        transform: rotateX(80deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
        opacity: 1;
    }
}




@media (max-width: 930px) {

    a {
        font-size: 8vw;
        padding: 5px 0;
    }

    h5 {
        display: none;
    }

    .links {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
}
</style>