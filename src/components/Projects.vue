<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const x = ref(0);
const y = ref(0);
const currentProject = ref(0)
const data = [
    {
        id: '0',
        title: 'Math Master',
        background: 'math-master',
        description: 'If you\'re in need of improving your fundamental math skills, worry no more, Math Master is here! Using this simple quiz app, you can test yourself and progress to the next level whenever you feel like it.',
        repository: 'https://github.com/arncil/math-master',
        website: 'https://arncil.github.io/math-master',
    },
    {
        id: '1',
        title: 'FaveTube',
        background: 'favetube',
        description: 'There is always room for improvement, even for the big ones. YouTube is great, but who has time for it? Introducing FaveTube, a YouTube clone that filters out irrelevant content and shows you what\'s valuable.',
        repository: 'https://github.com/arncil/favetube',
        website: 'https://arncil.github.io/favetube',
    },
    {
        id: '2',
        title: 'Gradient Generator',
        background: 'gradient-generator',
        description: 'Today, the Internet is full of all kinds of useful tools. I\'ve decided to make that number even bigger. With this Gradient Generator, you can easily choose the linear gradient that suits your needs best.',
        repository: 'https://github.com/arncil/gradient-generator',
        website: 'https://arncil.github.io/gradient-generator',
    },
    {
        id: '3',
        title: 'Match Pairs Game',
        background: 'match-pairs-game',
        description: 'It\'s very important for development and health to improve memory skills. In this game, you can do just that and even check out some new emojis!',
        repository: 'https://github.com/arncil/match-pairs-game',
        website: 'https://arncil.github.io/match-pairs-game',
    },
    {
        id: '4',
        title: 'Quester',
        background: 'quester',
        description: 'Organization is a crucial part of any project. If that\'s the case, how could I not create another to-do app? At least Quester has a cooler name than most of them.',
        repository: 'https://github.com/arncil/quester',
        website: 'https://arncil.github.io/quester',
    },
    {
        id: '5',
        title: 'Humor Me',
        background: 'humor-me',
        description: 'Nothing starts a conversation as well as a bad joke... right? If you\'re in need of some, check out this app.',
        repository: 'https://github.com/arncil/humor-me',
        website: 'https://arncil.github.io/humor-me',
    },
    {
        id: '6',
        title: 'Easy Notes',
        background: 'easy-notes',
        description: 'I know there are already too many apps for making notes. Even so, I wanted to build one. And here it is!',
        repository: 'https://github.com/arncil/easy-notes',
        website: 'https://arncil.github.io/easy-notes',
    },
    {
        id: '7',
        title: 'Previous Portfolio Website',
        background: 'previous-portfolio-website',
        description: 'Time goes by, skills improve, new projects beat old ones. Even though I\'m proud of my previous portfolio site, I wanted a new one. Still, you can check out that one here.',
        repository: 'https://github.com/Arncil/previous-portfolio-website',
        website: 'https://arncil.github.io/previous-portfolio-website',
    }
    // when adding new projects remember to update $project-length in scss below
]

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect()
    x.value = e.clientX - rect.left,
        y.value = e.clientY - rect.top;
};

const getImageUrl = image => {
    const path = `/images/projects/${image}.png`;
    return new URL(path, import.meta.url).href
};

</script>

<template>
    <div class="container">
        <div class="container__project" v-for="project in data" :key="project.id">
            <div class="container__project-stick" :style="{ backgroundImage: `url(${getImageUrl(project.background)})` }"
                @mouseenter="() => currentProject = project.id" @touchmove="() => currentProject = project.id">
                <Transition name="text">
                    <div class="container__project-glass" v-if="currentProject === project.id">
                        <div class="container__project-glass-effect" @mousemove="handleOnMouseMove"
                            :style="{ background: `radial-gradient(300px circle at ${x}px ${y}px, hsla(0, 0%, 100%, 0.3) 5%, transparent 40%` }">
                        </div>
                        <div class="container__project-glass-content" v-if="currentProject === project.id">
                            <h1>{{ project.title }}</h1>
                            <p>{{ project.description }}</p>
                            <div class="container__project-glass-content-buttons">
                                <button>
                                    <a :href="project.repository" target="_blank">
                                        <Icon icon="line-md:github-loop" />Repository
                                    </a>
                                </button>
                                <button>
                                    <a :href="project.website" target="_blank">
                                        <Icon icon="line-md:external-link" />Website
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$project-height: 90vh;
$project-length: 8;
$class-name: container;

.#{$class-name} {
    animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s;

    &__project {
        &-stick {
            top: 2rem;
            position: sticky;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 2rem;
            background-position: center;
            background-size: cover;
            height: $project-height;

        }

        &-glass {
            height: 65%;
            width: 65%;
            position: relative;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 930px) {
                width: 80%;
            }

            &-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: 90%;
                height: 80%;

                h1,
                p {
                    background-clip: text;
                    text-align: center;
                    color: hsl(0, 0%, 10%);
                    z-index: 1;
                    font-weight: 500;
                }

                h1 {
                    line-height: 1;
                    -webkit-text-stroke: hsl(0, 0%, 55%) 0.1px;
                }

                p {
                    font-size: 2.3vw;

                    @media (max-width: 930px) {
                        font-size: 3.5vw;
                    }

                    @media (max-width: 500px) {
                        font-size: 5vw;
                    }
                }

                &-buttons {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 90%;

                    a {
                        color: hsl(0, 0%, 85%);
                        font-weight: 300;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.4s;

                    }

                    button {
                        font-size: 2.5vw;
                        z-index: 3;
                        background: linear-gradient(180deg, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.8));
                        border: inset 2px hsl(0, 0%, 60%);
                        width: 15vw;
                        border-radius: 10px;
                        box-shadow: 1px 1px 10px hsl(0, 0%, 10%);
                        transition: all 0.4s;

                        :hover {
                            -webkit-animation: vibrate-1 0.3s linear infinite both;
                            animation: vibrate-1 0.3s linear infinite both;
                        }

                        @media (max-width: 930px) {
                            width: 30vw;
                            font-size: 5vw;
                        }
                    }
                }
            }

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                border-radius: inherit;
            }

            &::before {
                background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0.2));
                border: 1px solid hsl(0, 0%, 80%);
                box-shadow: 1px 1px 15px hsl(0, 0%, 10%);
            }

            &::after {
                background: linear-gradient(90deg, hsla(0, 0%, 50%, 0.6), hsla(0, 0%, 50%, 0.2));
            }

            &-effect {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                opacity: 0;
                transition: all 0.3s;
                z-index: 2;

                &:hover {
                    opacity: 1;
                }
            }
        }

        @for $i from 1 through $project-length {
            &:nth-child(#{$i}) {
                @if $i >1 {
                    margin-top: - $project-height * (($project-length - $i) + 1);
                }

                height: $project-height * ($project-length - $i)+$project-height;
            }
        }
    }
}

.text-enter-active {
    -webkit-animation: focus-in-expand-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: focus-in-expand-fwd 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.text-leave-active {
    -webkit-animation: focus-in-expand-fwd 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
    animation: focus-in-expand-fwd 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both reverse;
}

@keyframes focus-in-expand-fwd {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-800px);
        transform: translateZ(-800px);
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-filter: blur(0);
        filter: blur(0);
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
</style>