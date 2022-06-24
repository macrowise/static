const curtain = document.getElementById('curtain')
const main = document.getElementById('main')

curtain.addEventListener('animationstart', () => {
  main.classList.remove('opacity-0')
})

curtain.addEventListener('animationend', () => {
  curtain.classList.add('hidden')
})