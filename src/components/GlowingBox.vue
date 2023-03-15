<script setup>
import { ref } from 'vue';

const { } = defineProps(['path', 'category', 'description'])
const x = ref(0);
const y = ref(0);

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect()
    x.value = e.clientX - rect.left,
        y.value = e.clientY - rect.top;
};
</script>
 
<template>
    <Transition name="glowing-box" appear>
        <div class="box">
            <div class="effect" @mousemove="handleOnMouseMove"
                :style="{ background: `radial-gradient(300px circle at ${x}px ${y}px, hsla(0, 0%, 100%, 0.1) 5%, hsla(0, 0%, 100%, 0.05) 40%` }">
            </div>
            <img :src="path" :alt="category + ' Icon'">
            <div class="grid">
                <h4>{{ category }}</h4>
                <h6>{{ description }}</h6>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.box {
    background: radial-gradient(hsl(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.08));
    border: solid 1px hsl(0, 0%, 30%);
    width: 98%;
    height: 98%;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.5s;
}

.box:hover {
    border: solid 1px hsl(0, 0%, 80%);
}

.effect {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    top: 0;
    left: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.5s;
    cursor: url(https://cur.cursors-4u.net/cursors/cur-8/cur751.cur), auto !important;
}

.effect:hover {
    opacity: 1;
}

img {
    width: 50%;
    height: 50%;
    transition: all 0.5s;
    -webkit-filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.8));
    filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.8));
}

.grid {
    display: grid;
    place-items: center;
}

h4 {
    font-weight: 500;
    line-height: 1;
    z-index: 3;
}

h6 {
    line-height: 1;
    z-index: 3;
}

.box:hover h4,
.box:hover h6 {
    background: linear-gradient(90deg,
            hsl(200, 100%, 50%),
            hsl(325, 100%, 50%),
            hsl(55, 100%, 50%),
            hsl(200, 100%, 50%));
    background-size: 400%;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: bg-move 8s linear infinite;
    cursor: url(https://cur.cursors-4u.net/cursors/cur-8/cur751.cur), auto !important;
}

.box:hover img {
    scale: 1.1;
    /* margin-bottom: 1vmin; */
}

.glowing-box-enter-active {
    -webkit-animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.glowing-box-leave-active {
    -webkit-animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
    animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

@-webkit-keyframes tilt-in-tl {
    0% {
        -webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
        transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
    }
}

@keyframes tilt-in-tl {
    0% {
        -webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
        transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
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
</style>