"use strict";

// _unopenedBoosters: contains the list of boosterpacks, opened and/or unopened
// for example: [0, 1, 2, 1, 3, 3] 
// this means: first booster is open and has the version 0 image, second is not open and has the version image, third one is not open and has the version 2 image, ...
// if you have an better/other solution here, you may implent your own!!!

let _unopenedBoosters = [];

const _MAX_BOOSTER_VERSIONS = 3;

// ## GIVEN ##

function initBoostersPage() {
    document.querySelector("button").addEventListener("click", goToDeckBuildingPage);
}

function goToDeckBuildingPage() {
    navigateToPage("deck-building");
}

// ## YOUR ADDED FUNCTIONS ##

function RenderUnopenedBoosters(boosters) {
    const $ul = document.querySelector("#booster #unopenedBoosters");
    boosters.forEach(booster => {
        const li = `<li data-id="${booster.id}">
                        <img src="${"src"}" data-id="${booster.id}">
                    </li>`;
        $ul.insertAdjacentHTML("beforeend", li);
    });

    const $images = document.querySelectorAll("#boosters div ul li img");
    $images.forEach($image => {
        $image.addEventListener("click", showCardsFromPack);
    })
}

function showCardsFromPack() {

}