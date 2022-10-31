let mp = false //false equals % true equals mandates

const mpBtn = document.querySelector("#pm")
mpBtn.addEventListener("click", function(){
    if(mp == true){
        mp = false;
        loop()
    }
    else{
        mp = true;
        loop()
    }

})

const root = document.querySelector("#root")

const table = document.createElement("table")
table.classList.add("main-table")

root.appendChild(table)


function loop(){

table.innerHTML = ""

const headerRow = document.createElement("tr")
table.appendChild(headerRow)

const headEmpty = document.createElement("th")

const headLetter = document.createElement("th")
headLetter.appendChild (document.createTextNode ("Liste") )

const headParty = document.createElement("th")
headParty.appendChild (document.createTextNode("Parti"))

const headPoll = document.createElement("th")
headPoll.appendChild (document.createTextNode("Måling"))

const headLastElect = document.createElement("th")
headLastElect.appendChild (document.createTextNode("Sidste valgresultat"))

headerRow.appendChild(headEmpty)
headerRow.appendChild(headLetter)
headerRow.appendChild(headParty)
headerRow.appendChild(headPoll)
headerRow.appendChild(headLastElect)

data.forEach(function(element, index){

    let letter = element[0]
    let party = element[1]
    let poll
    if (mp == true){
        poll = 179 * element[2] /100
        poll = Math.floor(poll)
    }
    else{
        poll = element[2]
    }

    let prog = element[3]
    let img = element[4]

    let tr = document.createElement("tr")

    let letterTd = document.createElement("td")
    letterTd.appendChild (document.createTextNode(letter))

    let partyTd = document.createElement("td")
    partyTd.appendChild (document.createTextNode(party))

    let pollTd = document.createElement("td")
    pollTd.appendChild (document.createTextNode(poll))
    if(mp == false){
        pollTd.appendChild (document.createTextNode("%"))
    }

    let lastElectTd = document.createElement("td")
    lastElectTd.appendChild (document.createTextNode ( (poll - prog).toFixed(1)))

    let logoTd = document.createElement("td")
    let logo = document.createElement("img")
    logo.setAttribute("src", img)
    logoTd.appendChild (logo)

    tr.appendChild(logoTd)
    tr.appendChild(letterTd)
    tr.appendChild(partyTd)
    tr.appendChild(pollTd)
    tr.appendChild(lastElectTd)
    table.appendChild(tr)
})

}
loop()