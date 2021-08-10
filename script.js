let simon = []
let turns = 0
let player = []
let boxes = document.querySelectorAll('.box')
const startGame = document.querySelector('.start')
let clicks = document.querySelector('.gameboard')

function simonGoes() {
  let tile = boxes[Math.floor(Math.random() * boxes.length)]
  let id = parseInt(tile.dataset.id)
  simon.push(id)
}
simonGoes()
console.log(simon)
boxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    let id = parseInt(event.target.dataset.id)
    player.push(id)
    console.log(player)
    simonGoes()
    console.log('simon', simon)
  })
})

// function activateBox(color) {
//   const box = document.querySelector(`[data-color='${color}']`)
//   setTimeout(() => {
//     box.classList.remove('activated')
//   }, 300)
// }

// click begin
// simon goes once
// simon array get one random value between 1 and 4
// player goes once
// player array gets a value based on box pressed
// compare arrays to check for success
// if successful simons goes
// if unsuccessful restart
