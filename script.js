
//current day variable

const d = new Date();




//date display

document.getElementById("currentDay").innerHTML = d.toDateString();

// dynamically making elements (from 9am to 5pm) for scheduler
for (var i = 0; i < 8; i++) {
    var containerElem = document.getElementById("container")
    var outerDiv = document.createElement("div")
    outerDiv.classList.add("input-group")
    outerDiv.classList.add("mb-3")

    var outerDiv2 = document.createElement("div")
    outerDiv2.classList.add("input-group-prepend")
    outerDiv2.classList.add("flex-row")

    var spanDiv = document.createElement("span")
    spanDiv.classList.add("input-group-text")
    spanDiv.classList.add("hour")
    spanDiv.innerText = i < 4 ? `${i+9}:00am` : `${i+9-12}:00pm`

    var textArea = document.createElement("textarea")
    textArea.classList.add("form-control")
    textArea.classList.add("textarea")
    textArea.classList.add("description")
    textArea.rows = 2
    textArea.cols = 100
    textArea.value = localStorage.getItem(`task-${i}`) ? localStorage.getItem(`task-${i}`) : ''

    var innerDiv = document.createElement("div")
    innerDiv.classList.add("input-group-append")

    var saveButton = document.createElement("button")
    saveButton.classList.add("btn")
    saveButton.classList.add("btn-outline-secondary")
    saveButton.classList.add("saveBtn")


    var saveIcon = document.createElement("i")
    saveIcon.classList.add("far")
    saveIcon.classList.add("fa-save")

    if ( i < (d.getHours() - 12) ) {
        textArea.classList.add("past")
    }

    if ( i > (d.getHours() - 12)) {
        textArea.classList.add("future")
    }

    if ( i === (d.getHours() - 12)) {
        textArea.classList.add("present")
    }


    // appending of generated elements
    containerElem.appendChild(outerDiv)
    outerDiv.appendChild(outerDiv2)
    outerDiv2.appendChild(spanDiv)
    outerDiv2.appendChild(textArea)
    outerDiv2.appendChild(innerDiv)
    innerDiv.appendChild(saveButton)
    saveButton.appendChild(saveIcon)
}

// link variables to ids on html
let textBoxes = document.getElementsByTagName('textarea')
let buttons = document.getElementsByTagName('button')

let count = 0
// loop through elements to store in localStorage
for(var i=0; i<textBoxes.length; i++) {
    buttons[i].addEventListener("click", function () {
        console.log("count", count)
        localStorage.setItem(`task-${count}`, textBoxes[count].value)
        count++
    })

}