let simon = []
let count = 0
let player = []
let flash
let win
let clicks = document.querySelector('.gameboard')
let boxes = document.querySelectorAll('.box')

const begin = document.querySelector('#start')
const turnCounter = document
const blue = document / querySelector('#box1')
const red = document / querySelector('#box2')
const green = document / querySelector('#box3')
const orange = document / querySelector('#box4')

begin.addEventListener('click', (event) => {
  if (win) {
    play()
  }
  // simonGoes()
})

function simonGoes() {
  let tile = boxes[Math.floor(Math.random() * boxes.length)]
  let id = parseInt(tile.dataset.id)
  simon.push(id)
}
simonGoes()
console.log('simon', simon)

boxes.forEach((box, i) => {
  box.addEventListener('click', (event) => {
    let id = parseInt(event.target.dataset.id)
    player.push(id)
    console.log('player', player)

    result(count)
    count += 1

    simonGoes()
    console.log('simon', simon)
  })
})

function result(i) {
  console.log('index', i)
  if (simon[i] === player[i]) {
    console.log('Success')
  } else {
    alert('Game Over')
  }
}

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
