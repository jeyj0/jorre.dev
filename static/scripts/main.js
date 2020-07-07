(function () {
  document.getElementById('nav-toggle').addEventListener('change', navChange)
  document.getElementById('theme-switch-btn').addEventListener('click', switchTheme)
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
}
