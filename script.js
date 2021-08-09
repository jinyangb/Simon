let simon = []
let turns = 0
let player = []
let choices = [1, 2, 3, 4]
let squares = document.getElementsByClassName('box')
function simonGoes() {
  simon.push(Math.floor(4 * Math.random()) + 1)
  turns += 1
}
console.log(simon)
simonGoes()
console.log(simon)
console.log(turns)
