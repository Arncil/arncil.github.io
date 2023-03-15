<script setup>
import { Icon } from '@iconify/vue';

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
        <img src="/portfolio-website/images/cv-photo.png" alt="Miłosz's Photo">
    </div>
    <div class="hashtags">
        <p><Icon icon="mingcute:hashtag-line" />HTML</p>
        <p><Icon icon="mingcute:hashtag-line" />CSS</p>
        <p><Icon icon="mingcute:hashtag-line" />JavaScript</p>
        <p><Icon icon="mingcute:hashtag-line" />Vue</p>
        <p><Icon icon="mingcute:hashtag-line" />React</p>
        <p><Icon icon="mingcute:hashtag-line" />UI/UX</p>
        <p><Icon icon="mingcute:hashtag-line" />animation</p>
        <p><Icon icon="mingcute:hashtag-line" />Vite</p>
        <p><Icon icon="mingcute:hashtag-line" />Node</p>
    </div>
</template>

<style scoped>
.hashtags {
    height: 5vh;
    width: 80%;
    display: flex;
    justify-content: space-around;
    background: linear-gradient(90deg, transparent 30%, transparent 70%);
}

.hashtags p {
    display: flex;
    align-items: center;
    gap: 0 0.2rem;
    color: hsl(0, 0%, 85%);
    font-size: 1.5vw;
    background-color: hsl(0, 0%, 20%);
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    margin-right: 1rem;
    box-shadow:
        0 0.1rem 0.2rem rgb(0 0 0 / 20%),
        0 0.1rem 0.5rem rgb(0 0 0 / 30%),
        0 0.2rem 1.5rem rgb(0 0 0 / 40%);
}


.container {
    display: flex;
    justify-content: space-around;
    align-items: start;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50%;
}

img {
    height: 70vh;
    -webkit-filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.5));
    filter: drop-shadow(2px 2px 20px hsla(0, 0%, 0%, 0.5));
}

p {
    font-size: 1.5vw;
    line-height: 1.3;
    text-align: justify;
}
</style>