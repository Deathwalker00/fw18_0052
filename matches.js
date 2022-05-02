// write js code here corresponding to matches.html

var getInfols = JSON.parse(localStorage.getItem("schedule"))

//console.log(getInfols)
displayData(getInfols)

var favadd = [];


function displayData(a) {
    a.forEach(function(elm) {

        var tr = document.createElement("tr");
        var t1 = document.createElement("td")
        t1.innerText = elm.matchNum



        var t2 = document.createElement("td")
        t2.innerText = elm.teamA


        var t3 = document.createElement("td")
        t3.innerText = elm.teamB


        var t4 = document.createElement("td")
        t4.innerText = elm.date

        var t5 = document.createElement("td")
        t5.innerText = elm.venue

        var t6 = document.createElement("td")
        t6.innerText = "AddToFavourite"
        t6.style.color = "green"
        t6.style.cours


        t6.addEventListener("click", function() {

            fav(elm)
        })

        tr.append(t1, t2, t3, t4, t5, t6)

        document.querySelector("tbody").append(tr);

    })

    function fav(l) {

        favadd.push(l)

        localStorage.setItem("favadd", JSON.stringify(favadd))

    }



}


var place = doucument.querySelector("#filterVenue")


place.addEventListener("change", findplace)

findplace()