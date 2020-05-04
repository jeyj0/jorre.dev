(function () {
  document.getElementById('nav-toggle').addEventListener('change', navChange)
})()

function navChange(e) {
  const isOpen = e.target.checked;
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto'
  }
}
