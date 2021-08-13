let simon = []
let count = 0
let player = []
let on = 500
let off = 1000
let butt = document.getElementById('inst')

let boxes = document.querySelectorAll('.box')

function simonGoes() {
  let tile = boxes[Math.floor(Math.random() * boxes.length)]
  let id = parseInt(tile.dataset.id)
  simon.push(id)

  simon.forEach((id, i) => {
    let currentBox = document.querySelector(`[data-id='${id}']`)
    setTimeout(function () {
      currentBox.classList.add('bright')
    }, on * (i + 1) + 300)
    setTimeout(function () {
      currentBox.classList.remove('bright')
    }, on * (i + 1) + 500)
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
      player = []
      simonGoes()
    }
  })
})

butt.addEventListener('click', () => {
  alert('All you have to do is memorize the color pattern!')
})
