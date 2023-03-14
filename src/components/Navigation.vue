<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

</script>

<template>
    <Transition name="navigation" appear>
        <nav>
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
    position: fixed;
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

.links {
    width: 60%;
    display: flex;
    justify-content: space-around;
}


.navigation-enter-active {
	-webkit-animation: slide-in-blurred-bottom 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-in-blurred-bottom 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

.navigation-leave-active {
	-webkit-animation: slide-in-blurred-bottom 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both reverse;
	        animation: slide-in-blurred-bottom 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both reverse;
}

 @-webkit-keyframes slide-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}


@media (max-width: 930px) {
    nav {
        width: 100%;
        left: 0;
    }

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