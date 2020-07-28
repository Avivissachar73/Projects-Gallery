'use strict';


var gProjs = [
    createProj('Aviv.js', 'a note app all written in a framework I created', 'Jan20 - on going','img/projects/AvivJsNotes.png', 'https://avivissachar73.github.io/AvivJs-Notes/', 'https://github.com/Avivissachar73/AvivJs-Notes'),
    createProj('Snake', '', '23.7.2020','img/projects/Snake.png', 'https://avivissachar73.github.io/Snake/', 'https://github.com/Avivissachar73/Snake'),
    createProj('CovidPacman', '', '20-21.3.2020','img/projects/Pacman.png', 'https://avivissachar73.github.io/CovidPacman/', 'https://github.com/Avivissachar73/CovidPacman'),
    createProj('Damka', 'For 2 players or vs com', 'February 2020','img/projects/Damka.png', 'https://avivissachar73.github.io/Damka/', 'https://github.com/Avivissachar73/Damka'),
    createProj('Gamba', 'The final project of the Coding academy bootcamp, I created it with Paz Gerti and Itay Raz using VueJs and nodeJs.', 'December 2019','img/projects/Gamba_events.png', 'https://gamba-project.herokuapp.com/', 'https://github.com/ItayRaz/Gamba-Front', 'https://github.com/ItayRaz/Gamba-Back'),
    createProj('Space Invaders', 'A game I work on during my free time (still on development).', 'November 2019','img/projects/Space_Invaders.png', 'https://avivissachar73.github.io/Space-Invaders/', 'https://github.com/Avivissachar73/Space-Invaders'),
    createProj('AppSus', 'An aplication I created with Adi Pinhas using VueJs.', 'November 2019','img/projects/AppSus.png', 'https://avivissachar73.github.io/AppSus/', 'https://github.com/Avivissachar73/AppSus'),
    createProj('Meme Generator', '', 'October 2019', 'img/projects/Meme_Generator_PC.png', 'https://avivissachar73.github.io/meme-generator/', 'https://github.com/Avivissachar73/meme-generator'),
    createProj('Mine sweeper', '(Does not support touch events).', 'September 2019', 'img/projects/Mine_Sweeper.png', 'https://avivissachar73.github.io/Mine-Sweeper/', 'https://github.com/Avivissachar73/Mine-Sweeper'),
]

function renderProjs() {
    var htmlStr = gProjs.map(proj => {
        return `<li class="card">
                    <header class="flex align-center justify-center"><h3 class="text-center title">${proj.name}</h3></header>
                    <main class="flex column space-between">
                        <div class="proj-info flex column space-around">
                            <h4 class="text-center">${proj.createdAt}</h4>
                            <p class="text-center">${proj.description}</p>
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