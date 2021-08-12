let simon = []
let count = 0
let player = []

let boxes = document.querySelectorAll('.box')

function simonGoes() {
  let tile = boxes[Math.floor(Math.random() * boxes.length)]
  let id = parseInt(tile.dataset.id)
  simon.push(id)

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
