const curtain = document.getElementById('curtain')

curtain.addEventListener('animationend', (e) => {
  curtain.classList.add('hidden')
})