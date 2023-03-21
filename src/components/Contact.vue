<script setup>
import { ref } from 'vue';

const x = ref(0);
const y = ref(0);

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect()
    x.value = e.clientX - rect.left,
        y.value = e.clientY - rect.top;
};

const handleOnClick = e => {
    e.preventDefault();
    alert('Sorry, this feature is not available at the moment. You can mail me directly at jackowiakmilosz@gmail.com')
};

</script>

<template>
    <div class="container">
        <div class="effect" @mousemove="handleOnMouseMove"
            :style="{ background: `radial-gradient(300px circle at ${x}px ${y}px, hsla(0, 0%, 100%, 0.1) 5%, hsla(0, 0%, 100%, 0.05) 40%` }">
        </div>
        <form action="">
            <h1>Contact me!</h1>
            <input type="text" placeholder="Name...">
            <input type="text" placeholder="Email...">
            <textarea placeholder="Message..."></textarea>
            <button type="submit" @click="handleOnClick">Send</button>
        </form>
    </div>
</template>

<style scoped>
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

.container {
    width: 40%;
    background: radial-gradient(hsl(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.08));
    border: solid 1px hsl(0, 0%, 30%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    aspect-ratio: 1;
    animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s;
}

.container:hover {
    border: solid 1px hsl(0, 0%, 80%);
}

h1 {
    color: #ffffff;
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
    line-height: 1;
    text-align: center;
}

input,
textarea {
    background: linear-gradient(180deg, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.5));
    border: solid 1px hsl(0, 0%, 30%);
    border-radius: 10px;
    font-size: 2vw;
    color: hsl(0, 0%, 85%);
}

input,
textarea,
button {
    z-index: 2;
}

textarea {
    height: 40%;
}

form {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
}

button {
    color: hsl(0, 0%, 85%);
    font-size: 2.5vw;
    background: linear-gradient(180deg, hsl(0, 0%, 20%), hsl(0, 0%, 10%));
    border-radius: 10px;
    box-shadow: 1px 1px 10px hsl(0, 0%, 5%);
    width: 40%;
    align-self: center;
    transition: all 0.4s;
}

button:hover {
    transform: scale(1.1);
}

@keyframes bg-move {
    from {
        background-position: 0
    }

    to {
        background-position: 400%
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

@media (max-width: 930px) {

    .container {
        width: 66%;
        aspect-ratio: 1/1.2;
        margin: 1vh 0;
    }

    input,
    textarea,
    button {
        font-size: 4vw;
    }
}
</style>