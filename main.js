// Query elements
const date = document.getElementById('date')
const topImg = document.getElementById('topImg')
const bottomImg = document.getElementById('bottomImg')
const shoesImg = document.getElementById('shoesImg')
const tryAgain = document.getElementById('TryAgain')


// Show day of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const d = new Date()
let day = weekday[d.getDay()]
const dateDiv = document.createElement('div')
dateDiv.id = "dateText"
const dateShown = document.createTextNode(day)
date.appendChild(dateShown)

// Switch statement
const getDressCode = day => {
    switch (day) {
        case 'Saturday':
            return 'casual'
        case 'Sunday':
            return 'sport'
        default:
            return 'formal'
    }
}

// functions for items
const filteredTypeClothes = clothing.filter(e => {
    if(e.dressCode === getDressCode(day)) {
        return e
    }
})

const topFilter = filteredTypeClothes.filter(e => {
    if (e.type === "top") {
        return e
    }
})
const filterdBottoms = filteredTypeClothes.filter(e => {
    if(e.type === "bottom") {
        return e
    }
})
const shoesFilter = filteredTypeClothes.filter(e => {
    if(e.type === "shoes") {
        return e
    }
})

// Randomization
const randomIndex = arr => {
    return Math.floor(Math.random() * arr.length)
}

// Set img urls
topImg.src = topFilter[randomIndex(topFilter)].imageUrl
bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl
shoesImg.src = shoesFilter[randomIndex(shoesFilter)].imageUrl

// Set onClick
tryAgain.onclick = () => {
    topImg.src = topFilter[randomIndex(topFilter)].imageUrl
    bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl
    shoesImg.src = shoesFilter[randomIndex(shoesFilter)].imageUrl
}
