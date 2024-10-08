function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const countInput = document.querySelector('#controls input')
const container = document.getElementById('boxes')

const createBoxes = (amount) => {
  
  let size = 30
  let html = ''

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10
  }

  container.innerHTML = html
}

const destroyBoxes = () => container.innerHTML = ''

document.querySelector('[data-create]').addEventListener('click', e => {

  const count = Number.parseInt(countInput.value)
  
  if (count !== NaN && count > 0 && count <= 100) {
    destroyBoxes()
    createBoxes(count)
    countInput.value = ''
  }
})

document.querySelector('[data-destroy]').addEventListener('click', e => {
  destroyBoxes()
  countInput.value = ''
})