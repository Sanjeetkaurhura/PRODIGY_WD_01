// Navigation Bar
const navBtn = document.querySelector('#nav-btn')
const nav = document.querySelector('nav')

navBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
})

// Section Navigation
const sections = document.querySelectorAll('.section')
const sectionNav = document.querySelector('.section-nav')

// assign btn to sections
sections.forEach((section, i) => {
  secBtn(i)
})

// btns
const secBtns = document.querySelectorAll('.section-nav--btn')

// Btn interactivity
secBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    // remove active from others
    secBtns.forEach((bn) => {
      bn.classList.remove('active')
    })
    sections.forEach((section) => {
      section.classList.remove('active')
    })

    // activate
    btn.classList.add('active')
    sections[i].classList.add('active')
  })
})

// create a button
function secBtn(i) {
  const btn = document.createElement('span')
  btn.classList.add('section-nav--btn')
  if (i == 0) btn.classList.add('active')
  sectionNav.appendChild(btn)
}
