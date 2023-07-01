// variables
const body = document.body
const moon_icon = document.querySelector('.ri-moon-clear-line')
const menu_icon = document.querySelector('.bx-menu-alt-right')
const navlist = document.querySelector('.navlist')
const nav = document.querySelector('header')
const expand_btn = document.querySelector('.expand-btn')
const hidden = document.querySelectorAll('.hide')

// moon icon click
moon_icon.addEventListener('click', () => {
  if (moon_icon.classList.contains('ri-moon-clear-line')) {
    moon_icon.classList.remove('ri-moon-clear-line')
    moon_icon.classList.add('bx-sun')
  } else {
    moon_icon.classList.remove('bx-sun')
    moon_icon.classList.add('ri-moon-clear-line')
  }

  body.classList.toggle('dark')
})

// menu icon click
menu_icon.addEventListener('click', () => {
  navlist.classList.toggle('open')
  menu_icon.classList.toggle('bx-x-circle')
})

// if window is scroll
window.addEventListener('scroll', () => {
  navlist.classList.remove('open')
  menu_icon.classList.remove('bx-x-circle')
  nav.classList.toggle('sticky', window.scrollY > 0)
})

// to expand songs
expand_btn.addEventListener('click', () => {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.toggle('hide')
  }
  expand_btn.classList.toggle('change')

  if (expand_btn.classList.contains('change')) {
    expand_btn.textContent = 'Less'
  } else {
    expand_btn.textContent = 'Expand More'
  }
})

// changing navlist depends on the page
const allSection = document.querySelector('.navlist')
const secBtn = document.querySelectorAll('.sample')
function sampleFunc() {
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener('click', function () {
      let currBtn = document.querySelectorAll('.active')
      currBtn[0].className = currBtn[0].className.replace('active', '')
      this.className += ' active'
    })
  }
}

// calling function
sampleFunc()

// const sr = ScrollReveal ({
//     distance: '30px',
//     duration: 1500,
//     reset: true
// })

// sr.reveal('.home', {delay: 80, origin: 'left'});
// sr.reveal('.lyrics', {delay: 80, origin: 'right'});
// sr.reveal('.contact-us', {delay: 80, origin: 'bottom'});

// const boxes = document.querySelectorAll('.box');
// const overlays = document.querySelector('.overlay');

// function hoverBoxes() {
//     for(let i=0; i<boxes.length; i++) {
//         boxes[i].addEventListener('mouseover', () => {
//             boxes[i].style.cssText = `
//                 opacity: .1;
//             `;
//         })

//         boxes[i].addEventListener('mouseout', () => {
//             boxes[i].style.opacity = '1';
//         })
//     }
// }

// hoverBoxes();
const openBox = document.querySelectorAll('.vid-container')
const playBtn = document.querySelectorAll('.play-btn')
const overlay = document.querySelectorAll('.overlay')
const smapleExit = document.querySelectorAll('.sampleBtn')
const pola = document.querySelectorAll('.theVid')
// play btn is click
for (let i = 0; i < playBtn.length; i++) {
  playBtn[i].addEventListener('click', () => {
    openBox[i].classList.toggle('open-vid')
    overlay[i].classList.toggle('remove-overlay')

    pola[i].play()
  })
}

// exit btn is click
for (let i = 0; i < smapleExit.length; i++) {
  smapleExit[i].addEventListener('click', function () {
    if (openBox[i].classList.contains('open-vid')) {
      openBox[i].classList.remove('open-vid')
      overlay[i].classList.remove('remove-overlay')

      pola[i].pause()
      pola[i].currentTime = 0
    }
  })
}

// transition
TweenMax.from('.navlist, .logo', 1, {
  opacity: 0,
  y: -20,
  ease: Expo.easeInOut,
})

TweenMax.from('.moon-icon, .menu-icon', 1, {
  opacity: 0,
  x: 20,
  ease: Expo.easeInOut,
})

TweenMax.from('h1, h3, #impor', 2, {
  opacity: 0,
  y: -50,
  ease: Power3.easeInOut,
})

TweenMax.from('button', 1, {
  opacity: 0,
  y: 10,
  ease: Expo.easeInOut,
})
