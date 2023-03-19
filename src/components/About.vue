<script setup>
import HashtagsLeft from './HashtagsLeft.vue'
import HashtagsRight from './HashtagsRight.vue'


const hashtagsLineOne = [
    {
        id: 0,
        text: 'HTML3',
        delay: '0s'
    },
    {
        id: 1,
        text: 'CSS3',
        delay: '1.1s'
    },
    {
        id: 2,
        text: 'JavaScript',
        delay: '2.6s'
    },
    {
        id: 3,
        text: 'Vue',
        delay: '3.5s'
    },
    {
        id: 4,
        text: 'React',
        delay: '4.6s'
    },
    {
        id: 5,
        text: 'UI/UX',
        delay: '5.7s'
    },
    {
        id: 6,
        text: 'Node',
        delay: '6.75s'
    },
];

const hashtagsLineTwo = [
    {
        id: 0,
        text: 'TypeScript',
        delay: '0s'
    },
    {
        id: 1,
        text: 'NPM',
        delay: '1.05s'
    },
    {
        id: 2,
        text: 'Redux',
        delay: '2.22s'
    },
    {
        id: 3,
        text: 'Firebase',
        delay: '3.65s'
    },
    {
        id: 4,
        text: 'Router',
        delay: '4.9s'
    },
    {
        id: 5,
        text: 'Illustrator',
        delay: '6.4s'
    },
];

const hashtagsLineThree = [
    {
        id: 0,
        text: 'Tailwind',
        delay: '0s'
    },
    {
        id: 1,
        text: 'Photoshop',
        delay: '1.55s'
    },
    {
        id: 2,
        text: 'accessibility',
        delay: '3.25s'
    },
    {
        id: 3,
        text: 'Sass',
        delay: '4.3s'
    },
    {
        id: 4,
        text: 'Aseprite',
        delay: '5.65s'
    },
    {
        id: 5,
        text: 'ES6',
        delay: '6.65s'
    },
];

const imgPath = '/images/cv-photo.png';
</script>

<template>
    <div class="container">
        <div class="text">
            <h1>Welcome,</h1>
            <p>my name is Miłosz Jackowiak, a passionate front-end developer with a love for creating beautiful,
                user-friendly
                websites, based in Poznań, Poland. Despite having a little over 6 months of experience in the world of
                front-end
                development, I have already dedicated countless hours to learning and perfecting my craft. I am constantly
                expanding my knowledge and skills, and have gained proficiency in popular frameworks such as Vue and React.
                Every day presents a new opportunity to challenge myself and grow as a developer. I am thrilled to have the
                opportunity to share my work with you and showcase my passion for creating stunning, user-centric websites.
            </p>
            <h4>Thank you for visiting!</h4>
        </div>
        <div class="lines">
            <div class="hashtags">
                <HashtagsLeft v-for="hashtag in hashtagsLineOne" :key="hashtag.id" :id="hashtag.id" :content="hashtag.text"
                    :delay="hashtag.delay" />
            </div>
            <div class="hashtags">
                <HashtagsRight v-for="hashtag in hashtagsLineTwo" :key="hashtag.id" :id="hashtag.id" :content="hashtag.text"
                    :delay="hashtag.delay" />
            </div>
            <div class="hashtags">
                <HashtagsLeft v-for="hashtag in hashtagsLineThree" :key="hashtag.id" :id="hashtag.id"
                    :content="hashtag.text" :delay="hashtag.delay" />
            </div>
        </div>
    </div>
    <img :src="imgPath" alt="Miłosz's Photo">
</template>

<style scoped>
.lines {
    display: grid;
    place-items: center;
    min-height: 20vh;
}

.hashtags {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: linear-gradient(90deg, transparent 30%, transparent 70%);
    margin-bottom: 1vh;
    position: relative;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 80vh;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
}

img {
    height: 80vh;
    -webkit-filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.5));
    filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.5));
}

p {
    font-size: 1.5vw;
    line-height: 1.3;
    text-align: justify;
}

.text h1 {
    animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.text p {
    animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.5s;
}

.text h4 {
    animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 1s;
}

img {
    animation: tilt-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 1.5s;
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
        width: 80%;
        height: max-content;
    }

    .lines {
        display: none;
    }

    img {
        height: 40vh;
        transition: all 0.5s;
    }

    p {
        font-size: 3.5vw;
        line-height: 1.3;
        text-align: justify;
    }
}
</style>