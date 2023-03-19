<script setup>
import { ref, onMounted } from 'vue';

const index = ref(0);

const data = [
    {
        id: 'a',
        icon: 'javascript',
        alt: 'JavaScript Logo',
        title: 'JavaScript',
        subtitle: 'for everything'
    },
    {
        id: 'b',
        icon: 'react',
        alt: 'React Logo',
        title: 'React',
        subtitle: 'for awesome projects'
    },
    {
        id: 'c',
        icon: 'vue',
        alt: 'Vue Logo',
        title: 'Vue',
        subtitle: 'for even better projects'
    },
    {
        id: 'd',
        icon: 'vitejs',
        alt: 'Vite Logo',
        title: 'Vite',
        subtitle: 'for building'
    },
    {
        id: 'e',
        icon: 'sass',
        alt: 'Sass Logo',
        title: 'Sass',
        subtitle: 'for white magic'
    },
    {
        id: 'f',
        icon: 'nodejs',
        alt: 'Node Logo',
        title: 'Node',
        subtitle: 'for dark magic'
    },
    {
        id: 'g',
        icon: 'adobe-illustrator',
        alt: 'Adobe Illustrator Logo',
        title: 'Illustrator',
        subtitle: 'for design'
    },
];

const delay = 5000;
let interval = undefined;

const createInterval = () => setInterval(() => {
    index.value = index.value + 1 === data.length ? 0 : index.value = index.value + 1;
}, delay);

onMounted(() => {
    interval = createInterval();
})

const handleOnClick = el => {
    interval && clearInterval(interval);
    // indexOf() may not work with server fetching; for that use findIndex()
    index.value = data.indexOf(el);
    interval = createInterval();
};

const isActive = el => index.value === data.indexOf(el);

const getImageUrl = image => {
    const path = `/icons/${image}.svg`;
    return new URL(path, import.meta.url).href
};


</script>

<template>
    <div class="container">
        <div class="slide" v-for="slide in data " :key="slide.id"
            :class="{ active: isActive(slide), nonactive: !isActive(slide), [slide.id]: true }"
            @click="handleOnClick(slide)">
            <Transition name="slide">
                <img v-if="isActive(slide)" :src="getImageUrl(slide.icon)" :alt="slide.alt">
            </Transition>
            <Transition name="slide">
                <h1 v-if="isActive(slide)">{{ slide.title }}</h1>
            </Transition>
            <Transition name="slide">
                <h6 v-if="isActive(slide)">{{ slide.subtitle }}</h6>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.slide-enter-active {
    -webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.slide-leave-active {
    -webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both reverse;
    animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both reverse;
}

.slide {
    min-width: 10px;
    width: 50px;
    height: 100%;
    justify-content: center;
    cursor: pointer;
    margin: 0 10px;
    border-radius: 50px;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 10px hsla(0, 0%, 0%, 0.8);
    opacity: .5;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h1,
h6 {
    color: hsla(0, 0%, 0%);
    font-weight: 600;
}

.b h1,
.b h6 {
    color: hsl(195, 80%, 80%);
}

.c h1,
.c h6 {
    color: hsl(210, 30%, 15%);
}

.d h1,
.d h6 {
    color: hsl(274, 100%, 90%);
}

.e h1,
.e h6 {
    color: hsl(331, 51%, 60%);
}

.f h1,
.f h6 {
    color: hsl(100, 30%, 20%);
}

.g h1,
.g h6 {
    color: hsl(0, 100%, 10%);
}

.active {
    flex-grow: 1;
    transition-duration: 1s;
    opacity: 1;
    padding: 0 10px;
    border-radius: 25px;
    padding-bottom: 10px
}

.nonactive {
    flex-grow: 0;
    opacity: .5;
    transition-duration: 1s;
}

img {
    width: 30vmin;
    -webkit-filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.3));
    filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.3));
}

.a {
    background: linear-gradient(90deg, hsl(50, 100%, 40%), hsl(50, 100%, 50%), hsl(50, 100%, 70%), hsl(50, 100%, 50%), hsl(50, 100%, 40%));
    background-size: 400%;
    animation: bg-move 20s linear infinite reverse;
}

.b {
    background: linear-gradient(90deg, hsl(195, 100%, 30%), hsl(200, 100%, 40%), hsl(200, 100%, 50%), hsl(200, 100%, 40%), hsl(195, 100%, 30%));
    background-size: 200%;
    animation: bg-move 20s linear infinite reverse;
}

.c {
    background: linear-gradient(90deg, hsl(150, 50%, 50%), hsl(210, 30%, 30%), hsl(210, 40%, 50%), hsl(210, 30%, 30%), hsl(150, 50%, 50%));
    background-size: 200%;
    animation: bg-move 20s linear infinite reverse;
}

.d {
    background: linear-gradient(90deg, hsl(200, 80%, 40%), hsl(280, 100%, 60%), hsl(40, 100%, 50%), hsl(280, 100%, 60%), hsl(200, 80%, 40%));
    background-size: 200%;
    animation: bg-move 20s linear infinite reverse;
}

.e {
    background: linear-gradient(90deg, hsl(330, 50%, 30%), hsl(330, 50%, 40%), hsl(330, 50%, 70%), hsl(330, 50%, 40%), hsl(330, 50%, 30%));
    background-size: 200%;
    animation: bg-move 20s linear infinite reverse;
}

.f {
    background: linear-gradient(90deg, hsl(120, 35%, 30%), hsl(120, 35%, 40%), hsl(105, 40%, 55%), hsl(120, 35%, 40%), hsl(120, 35%, 30%));
    background-size: 200%;
    animation: bg-move 20s linear infinite reverse;
}

.g {
    background: linear-gradient(90deg, hsl(0, 100%, 20%), hsl(20, 100%, 30%), hsl(35, 100%, 50%), hsl(20, 100%, 30%), hsl(0, 100%, 20%));
    background-size: 200%;
    animation: bg-move 20s linear infinite reverse;
}

@-webkit-keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}


@-webkit-keyframes puff-in-center {
    0% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-filter: blur(4px);
        filter: blur(4px);
        opacity: 0;
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

@keyframes puff-in-center {
    0% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-filter: blur(4px);
        filter: blur(4px);
        opacity: 0;
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

@keyframes bg-move {
    from {
        background-position: 0
    }

    to {
        background-position: 400%
    }
}

@media (max-width: 930px) {
    .container {
        flex-direction: column;
        height: 90vh;
    }

    .slide {
        width: 97%;
        margin: 5px 0;
        height: 50px;
    }

    img {
        width: 20vmin;
    }
}
</style>