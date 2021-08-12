let order = []
let simon = []
let count = 0
let player = []
let intervalId
let flash
let win
let on = false
let clicks = document.querySelector('.gameboard')
let boxes = document.querySelectorAll('.box')

const blue = document.querySelector('#box1')
const red = document.querySelector('#box2')
const green = document.querySelector('#box3')
const orange = document.querySelector('#box4')
const startButton = document.querySelector('#start')

// startButton.addEventListener('click', (event) => {
//   if (win) {
//     play()
//   }
// })
// function play() {
//   win = false
//   order = []
//   player = []
//   flash = 0
//   intervalId = 0
//   count = 1
//   good = true
//   for (let i = 0; i <= simon.length; i++) {
//     order.push(Math.floor(Math.random() * 4) + 1)
//   }
//   simon = true

//   intervalId = setInterval(gameTurn, 800)
// }

// function gameTurn() {
//   on = false

// if (flash == turn) {
//   clearInterval(intervalId)
//   simon = false
//   clearColor()
//   on = true
// }

// if (simon) {
//   clearColor()
//   setTimeout(() => {
//     if (order[flash] == box1)
//       if (order[flash] == box2)
//         if (order[flash] == box33) if (order[flash] == box4) flash++
//   }, 500)
// }

// function clearColor() {
//   box1.style.backgroundColor = 'blue'
//   box2.style.backgroundColor = 'red'
//   box3.style.backgroundColor = 'green'
//   box4.style.backgroundColor = 'orange'
// }

// function flashColor() {
//   box1.style.backgroundColor = 'blue'
//   box2.style.backgroundColor = 'red'
//   box3.style.backgroundColor = 'green'
//   box4.style.backgroundColor = 'orange'
// }

function simonGoes() {
  let tile = boxes[Math.floor(Math.random() * boxes.length)]
  let id = parseInt(tile.dataset.id)
  simon.push(id)
  // window.setTimeout(flashColor())
  // window.clearInterval()
  simon.forEach((id) => {
    let currentBox = document.querySelector(`[data-id='${id}']`)
    setTimeout(function () {
      currentBox.classList.toggle('bright')
    }, 500)
    setTimeout(function () {
      currentBox.classList.toggle('bright')
    }, 1000)
  })
}

simonGoes()
console.log('simon', simon)

function result(i) {
  console.log('index', i)
  if (simon[i] === player[i]) {
    console.log('Success')
  } else {
    alert('Game Over')
    location.reload()
  }
}

boxes.forEach((box, i) => {
  box.addEventListener('click', (event) => {
    let id = parseInt(event.target.dataset.id)
    player.push(id)
    console.log('player', player)

    result(count)
    count += 1
    if (count === simon.length) {
      count = 0
      simonGoes()
    }
  })
})

// let beginButton = document.querySelector('#start')
// document.getElementById('start').innerHTML = 'Start'
// when 'begin' is clicked simon picks a number 1 through 4
// I need function to restart everytime and add more squares clicked.
// click begin
// simon goes once
// simon array get one random value between 1 and 4
// player goes once
// player array gets a value based on box pressed
// compare arrays to check for success
// if successful simons goes
// if unsuccessful restart
