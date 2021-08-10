let simon = []
let turns = 0
let player = []
const startGame = document.getElementById('start')

function simonGoes() {
  simon.push(Math.floor(4 * Math.random()) + 1)
  turns += 1
  function playerGoes() {
    player.push(clicks)
  }
}
// if (simon === player) {
//   function simonGoes() {
//     turns += 1
//   }
// } else {
//   turns = 0
// }
