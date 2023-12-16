"use strict";

// ## GIVEN ##

function initSubscribePage(){
    document.querySelector("input[type=submit]").addEventListener("click", goToBoostersPage);
    document.querySelector("#subscribe form").addEventListener("submit", submitForm);
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

    console.log("triggers");

    const $subForm = document.querySelector("#subscribe form");
    _name = $subForm.querySelector('input[name="name"]').value;
    _set = $subForm.querySelector('input[name="choice"]:checked').value;
    _booster = $subForm.querySelector('input[name="boosters"]').value;

    navigateToPage("boosters");
}

function renderSet(sets) {
    const $set = document.querySelector("#set");
    $set.innerHTML = "";
    for(const set in sets) {
        $set.insertAdjacentHTML("beforeend", `<input type="radio" id="${set}" name="choice" value="${set}"> <label> ${sets[set]} </label>
`)
    }
}