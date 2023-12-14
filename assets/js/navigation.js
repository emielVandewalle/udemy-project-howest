"use strict";
// ## GIVEN ##

const NR_OF_BACKGROUNDS = 3;

function initNavigation(){
    const $next = document.querySelectorAll(".next");
    $next.forEach(next => {
        next.addEventListener("click", navigate);
    })
}

function navigate(e){
    e.preventDefault();
    const target = e.target.dataset.target;

    navigateToPage(target);

}

function navigateToPage(targetId){
    const $pages = document.querySelectorAll('.page');
    $pages.forEach($page => {
        $page.classList.add("hidden");
    });

    const $currentPage = document.querySelector(`#${targetId}`);
    $currentPage.classList.remove("hidden");

    if (targetId === "subscribe") {
        initSubscribePage();
    } else if (targetId === "boosters") {
        initBoostersPage();
    } else if (targetId === "deck-building") {
        initDeckbuildingPage();
    } else if (targetId === "stats") {
        initStatsPage();
    } else if (targetId === "thanks") {
        initThankYouPage();
    }

}


// ## YOUR ADDED FUNCTIONS ##
