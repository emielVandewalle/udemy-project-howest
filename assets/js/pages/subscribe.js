"use strict";

// ## GIVEN ##

function initSubscribePage(){
    document.querySelector("input[type=submit]").addEventListener("click", goToBoostersPage);
    document.querySelector(" #subscribe form").addEventListener("submit", submitForm);
    renderSet(config.sets);
}

// ## YOUR ADDED FUNCTIONS ##
let _name;
let _set;
let _booster;

function goToBoostersPage() {
    navigateToPage("boosters");
}

function submitForm(e) {
    e.preventDefault();

    const $select = document.querySelector("#subscribe form select");
    _name = $select.value;
    _set = $select.value;
    _booster = $select.value;

    navigateToPage("boosters");
}

function renderSet(sets) {
    const $set = document.querySelector("#subscribe form > label:nth-child(7)");
    $set.innerHTML = "";
    $set.insertAdjacentHTML("beforeend", `<option></option>`);
    for(const set in sets) {
        $set.insertAdjacentHTML("beforeend", `<input type="radio" id="${set}" name="choice" checked="checked"> <label> ${sets[set]} </label>
`)
    }
}