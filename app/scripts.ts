const body = document.body

// Navbar

const header = document.createElement('header')
const navbar = document.createElement('nav')
navbar.classList.add('bg-primary', 'navbar')
const navContainer = document.createElement('div')
navContainer.classList.add('navbar-container')


body.appendChild(header)
header.appendChild(navbar)
navbar.appendChild(navContainer)

const logo = document.createElement('a')
logo.setAttribute('href', '#')
logo.classList.add('navbar-brand', 'ms-5')
logo.textContent = "<Job Finder/>"

navContainer.appendChild(logo)

// const divUl = document.createElement('div')
// divUl.classList.add('collapse', 'navbar-collapse')
const ul = document.createElement('ul')
ul.classList.add('navbar-nav', 'flex-row', 'me-5')
const li1 = document.createElement('li')
li1.classList.add('me-3')
const aLi1 = document.createElement('a')
li1.classList.add('nav-item')
aLi1.textContent = "Home"
aLi1.setAttribute('href', './home.html')


const li2 = document.createElement('li')
const aLi2 = document.createElement('a')
li2.classList.add('nav-item')
aLi2.setAttribute('href', './add-job.html')
aLi2.textContent = "Create Job"



navContainer.appendChild(ul)
ul.appendChild(li1)
li1.appendChild(aLi1)
ul.appendChild(li2)
li2.appendChild(aLi2)
