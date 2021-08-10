let simon = []
let turns = 0
let player = []
const startGame = document.querySelector('.start')
let clicks = document.querySelectorAll('.box')

clicks.addEventListener('click', function () {})

function simonGoes() {
  simon.push(Math.floor(4 * Math.random()) + 1)
  turns += 1
  function playerGoes() {
    player.push(clicks)
  }
}
function activateBox(color) {
  const box = document.querySelectorAll(`[data-color='${color}']`)
  setTimeout(() => {
    box.classList.remove('activated')
  }, 300)
}
// if (simon === player) {
//   turns += 1
// } else {
//   turns = 0
// }
// simonGoes()
// console.log(simonGoes)
// if (simon === player) {
//   function simonGoes() {
//     turns += 1
//   }
// } else {
//   turns = 0
// }
