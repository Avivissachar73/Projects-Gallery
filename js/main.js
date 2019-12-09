'use strict';


var gProjs = [
    createProj('Gamba', 'The final project of the Coding academy bootcamp, I created it with Paz Gerti and Itay Raz using VueJs.', 'December 2019','img/projects/Gamba_events.png', 'https://gamba-project.herokuapp.com/', 'https://github.com/ItayRaz/Gamba-Front', 'https://github.com/ItayRaz/Gamba-Back'),
    createProj('Space Invaders', 'A game I am working on during my free time (still on development).', 'November 2019','img/projects/Space_Invaders.png', 'https://avivissachar73.github.io/Space-Invaders/', 'https://github.com/Avivissachar73/Space-Invaders'),
    createProj('AppSus', 'An aplication I created with Adi Pinhas using VueJs.', 'November 2019','img/projects/AppSus.png', 'https://avivissachar73.github.io/AppSus/', 'https://github.com/Avivissachar73/AppSus'),
    createProj('Meme Generator', '', 'October 2019', 'img/projects/Meme_Generator_PC.png', 'https://avivissachar73.github.io/meme-generator/', 'https://github.com/Avivissachar73/meme-generator'),
    createProj('Mine sweeper', '', 'September 2019', 'img/projects/Mine_Sweeper.png', 'https://avivissachar73.github.io/Mine-Sweeper/', 'https://github.com/Avivissachar73/Mine-Sweeper'),
]

function renderProjs() {
    var htmlStr = gProjs.map(proj => {
        return `<li class="card">
                    <header class="flex align-center justify-center"><h3 class="text-center title">${proj.name}</h3></header>
                    <main class="flex column space-between">
                        <div class="proj-info flex column space-around">
                            <p class="text-center">${proj.createdAt}</p>
                            <p>${proj.description}</p>
                            <div class=" flex align-center space-around wrap links">
                                <div class="text-center"><a href="${proj.projUrl}" target="_blank">Go to project</a></div>
                                <div class="text-center"><a href="${proj.gitFrontRepo}" target="_blank">View code</a></div>
                                ${getGitBackHtmlStr(proj)}
                            </div>
                        </div>
                        <img src="${proj.imgSrc}" alt="proj img"/>
                    </main>
                </li>`;
    }).join('');
    document.querySelector('.project-list').innerHTML = htmlStr;
}


function getGitBackHtmlStr(proj) {
    return (proj.gitBackRepo)? `<div class="text-center"><a href="${proj.gitBackRepo}" target="_blank">Backend code</a></div>` : ``;
}

function createProj(name, description, createdAt, imgSrc, projUrl, gitFrontRepo = null, gitBackRepo = null) {
    return {
        name,
        description,
        createdAt,
        imgSrc,
        projUrl,
        gitFrontRepo,
        gitBackRepo
    }
}