"use strict";

// ## GIVEN ##

function initDeckbuildingPage(){
    document.querySelector("a").addEventListener("click", goToStatsPage);
    document.querySelector("#deck-building button").addEventListener("click", goToThanksPage);
}

function renderCardPool(){

}

function renderDeck(){

}

function renderDeckZones(){

}

function showCardDetail(e){

}

function moveCardToDeck(e){

}

function moveCardToPool(e){
    
}


// ## YOUR ADDED FUNCTIONS ##

function goToStatsPage() {
    navigateToPage("stats");
}

function goToThanksPage() {
    navigateToPage("thanks");
}