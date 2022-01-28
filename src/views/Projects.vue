<template>
<div id="projects">
    <div v-for="project in $store.state.projects" :key="project">
        <div class="card" style="background: url('{{ project.ProjectImg }}');">
            <h2 class="name">{{ project.Title }}</h2>
            <p class="techStack">{{ project.techStack }}</p>
            <p class="content">{{ project.description }}</p>
            <a href='{{ project.gitHub }}' target="_blank">GitHub</a>
            <a href='{{ project.liveLink }}' target="_blank">Live</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
#projects {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100vw;
    position: fixed;
    top: 15%;
}

/* .card {
    background: none;
    box-shadow: 0 5px 25px gold;
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 15px;
    font-size: 110%;
    padding: 10%;
} */
</style>