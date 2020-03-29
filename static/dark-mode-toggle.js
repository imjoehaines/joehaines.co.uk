'use strict'

;(function (document, matchMedia, localStorage) {
  function updateText (element, isDarkModeEnabled) {
    element.innerText = `${isDarkModeEnabled ? 'Light' : 'Dark'} mode`
  }

  function updateClasses (element, isDarkModeEnabled) {
    element.classList.toggle('dark-mode', isDarkModeEnabled)
    element.classList.toggle('light-mode', !isDarkModeEnabled)
  }

  const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)')

  let isDarkModeEnabled = prefersDarkMode.matches

  const root = document.querySelector('html')
  const element = document.createElement('button')
  element.classList.add('dark-mode-toggle')
  element.classList.add('link')

  element.addEventListener('click', function (event) {
    isDarkModeEnabled = !isDarkModeEnabled

    updateText(element, isDarkModeEnabled)
    updateClasses(root, isDarkModeEnabled)
    localStorage.setItem('isDarkModeEnabled', isDarkModeEnabled)
  })

  // Technically if we haven't already set a class on the html element then
  // there's no need to do anything if their prefered colour scheme changes
  // because CSS will do it for us, but it's easier to do it anyway rather than
  // check if we've set a class or not
  prefersDarkMode.addListener(function (prefersDarkMode) {
    isDarkModeEnabled = prefersDarkMode.matches

    updateText(element, isDarkModeEnabled)
    updateClasses(root, isDarkModeEnabled)
    localStorage.removeItem('isDarkModeEnabled')
  })

  const storedValue = localStorage.getItem('isDarkModeEnabled')

  if (storedValue) {
    isDarkModeEnabled = storedValue === 'true'
    updateClasses(root, isDarkModeEnabled)
  }

  updateText(element, isDarkModeEnabled)

  document.body.appendChild(element)
})(window.document, window.matchMedia, window.localStorage)
