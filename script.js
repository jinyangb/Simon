let simon = []
let count = 0
let player = []
const begin = document.querySelector('#start')
let boxes = document.querySelectorAll('.box')
// const startGame = document.querySelector('.start')
let clicks = document.querySelector('.gameboard')

console.log(begin)
begin.addEventListener('click', () => {
  simonGoes()
})
function simonGoes() {
  let tile = boxes[Math.floor(Math.random() * boxes.length)]
  let id = parseInt(tile.dataset.id)
  simon.push(id)
}
simonGoes()
console.log(simon)
boxes.forEach((box, i) => {
  box.addEventListener('click', (event) => {
    let id = parseInt(event.target.dataset.id)
    player.push(id)
    console.log(player)
    simonGoes()
    console.log('simon', simon)
    result(i)
  })
})

function result(i) {
  if (simon[i] === player[i]) {
    console.log('simon = player[i]')
  } else {
    alert('Game Over')
  }
}

// click begin
// simon goes once
// simon array get one random value between 1 and 4
// player goes once
// player array gets a value based on box pressed
// compare arrays to check for success
// if successful simons goes
// if unsuccessful restart
