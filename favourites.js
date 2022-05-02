// write js code here corresponding to favourites.html

var getInfols = JSON.parse(localStorage.getItem("favadd"))

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
        t6.innerText = "Remove"
        t6.style.color = "red"



        t6.addEventListener("click", re)

        tr.append(t1, t2, t3, t4, t5, t6)

        document.querySelector("tbody").append(tr);

    })


    function re() {

        event.target.parentelement.remove();
    }


}