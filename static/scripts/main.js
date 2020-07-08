const STORAGE_KEY_THEME = 'theme'

;(function () {
  document.getElementById('nav-toggle').addEventListener('change', navChange)
  document.getElementById('theme-switch-btn').addEventListener('click', switchTheme)

  try {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY_THEME)
    if (savedTheme === 'dark') {
      document.body.classList.add('theme-dark')
    } else if (savedTheme === 'light') {
      document.body.classList.add('theme-light')
    }
  } catch (e) {
    console.debug('Could not get saved theme', e)
  }
})()

function navChange(e) {
  const isOpen = e.target.checked;
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto'
  }
}

function switchTheme() {
  const bgColor = window.getComputedStyle(document.body).backgroundColor
  const isLightEnabled = bgColor === '#fbf1c7' || bgColor.replace(/ /g, '') === 'rgb(251,241,199)'

  if (!isLightEnabled) {
    document.body.classList.add('theme-light')
    document.body.classList.remove('theme-dark')
  } else {
    document.body.classList.add('theme-dark')
    document.body.classList.remove('theme-light')
  }

  try {
    window.localStorage.setItem(STORAGE_KEY_THEME, isLightEnabled ? 'dark' : 'light')
  } catch (e) {
    console.debug('Could not save theme preference', e)
  }
}
