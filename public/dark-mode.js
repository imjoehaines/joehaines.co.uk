const toggle = document.querySelector('.toggle-dark-mode')

let isDarkModeEnabled = +window.localStorage.getItem('dark-mode') === 1 || false

toggle.addEventListener('click', function (event) {
  event.preventDefault()

  isDarkModeEnabled = !isDarkModeEnabled

  render(isDarkModeEnabled)

  window.localStorage.setItem('dark-mode', +isDarkModeEnabled)
})

function render (isDarkModeEnabled) {
  document.documentElement.classList.toggle('light-mode', isDarkModeEnabled === false)
  document.documentElement.classList.toggle('dark-mode', isDarkModeEnabled === true)
}

render(isDarkModeEnabled)

toggle.classList.remove('hide')
