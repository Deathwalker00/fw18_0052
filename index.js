var list = JSON.parse(localStorage.getItem("schedule")) || [];
var masaiForm = document.querySelector("form");
//console.log(masaiForm);
masaiForm.addEventListener("submit", getData)

function getData() {
    event.preventDefault();


    var obj = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value,

    }
    list.push(obj);

    localStorage.setItem("schedule", JSON.stringify(list))

    // window.location.href = "matches.js"

}