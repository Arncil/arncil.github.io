<script setup>
// Hacked Text Effect source: https://codepen.io/Hyperplexed/details/rNrJgrd
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const handleOnMouseOver = event => {
    let iteration = 0;
    let interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 10);
};

</script>

<template>
    <header>
        <Transition name="one" appear>
            <h3 @mouseover="handleOnMouseOver" data-value="Hi there!">Hi there!</h3>
        </Transition>
        <Transition name="two" appear>
            <h1 @mouseover="handleOnMouseOver" data-value="My name is Miłosz">My name is Miłosz</h1>
        </Transition>
        <Transition name="three" appear>
            <h3 @mouseover="handleOnMouseOver" data-value="I'm a web developer">I'm a web developer</h3>
        </Transition>
    </header>
</template>

<style scoped>
header {
    padding: 1rem;
    animation: bg-move 8s linear infinite;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1,
h3 {
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
    line-height: 1;
    animation: bg-move 8s linear infinite;

}

.one-enter-active {
    animation: bounce-top 2s both 1.5s;
}

.two-enter-active {
    animation: bounce-top 2s both 1s;
}

.three-enter-active {
    animation: bounce-top 2s both 0.5s;
}

@keyframes bounce-top {
    0% {
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 1;
    }

    24% {
        opacity: 1;
    }

    40% {
        -webkit-transform: translateY(-24px);
        transform: translateY(-24px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    65% {
        -webkit-transform: translateY(-12px);
        transform: translateY(-12px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    82% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    93% {
        -webkit-transform: translateY(-4px);
        transform: translateY(-4px);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }

    25%,
    55%,
    75%,
    87% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }

    100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
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
