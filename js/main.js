'use strict';


var gProjs = [
    createProj('Space Invaders', 'A game I am working on during my free time (still on development)', 'November 2019','img/projects/Space_Invaders.png', 'https://avivissachar73.github.io/Space-Invaders/'),
    createProj('AppSus', 'An aplication I created with Adi Pinhas using VueJs frame work', 'November 2019','img/projects/AppSus.png', 'https://avivissachar73.github.io/AppSus/'),
    createProj('Meme Generator', '', 'October 2019', 'img/projects/Meme_Generator_PC.png', 'https://avivissachar73.github.io/meme-generator/'),
    createProj('Mine sweeper', '', 'September 2019', 'img/projects/Mine_Sweeper.png', 'https://avivissachar73.github.io/Mine-Sweeper/'),
]

function renderProjs() {
    var htmlStr = gProjs.map(proj => {
        return `<li class="card">
                    <header class="flex align-center justify-center"><h3 class="text-center title">${proj.name}</h3></header>
                    <main class="flex column space-between">
                        <div class="proj-info flex column space-around">
                            <p class="text-center">${proj.createdAt}</p>
                            <p>${proj.description}</p>
                            <div class="text-center"><a href="${proj.githubUrl}" target="_blank">Go to project</a></div>
                        </div>
                        <img src="${proj.imgSrc}" alt="proj img"/>
                    </main>
                </li>`;
    }).join('');
    document.querySelector('.project-list').innerHTML = htmlStr;
}


function createProj(name, description, createdAt, imgSrc, githubUrl) {
    return {
        name,
        description,
        createdAt,
        imgSrc,
        githubUrl
    }
}