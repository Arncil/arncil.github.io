<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps(['id', 'content', 'delay']);
</script>

<template>
    <p :style="{ animationDelay: delay }">
        <Icon icon="mingcute:hashtag-line" />{{ content }}
    </p>
</template>

<style scoped>
p {
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 85%);
    font-size: 1.5vw;
    background-color: hsl(0, 0%, 20%);
    border-radius: 10px;
    padding: 0.5vw 0.7vw;
    margin-right: 1vw;
    box-shadow: 1px 1px 10px hsl(0, 0%, 5%);
    top: 0;
    position: absolute;
    opacity: 0;
    animation: slide 8s linear infinite;
}

@keyframes slide {
    0% {
        right: 0;
        opacity: 0;
    }

    10%,
    75% {
        opacity: 1;
    }

    85% {
        opacity: 0;
    }

    100% {
        right: 100%;
        opacity: 0;
    }
}
</style>