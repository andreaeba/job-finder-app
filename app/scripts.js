var body = document.body;
// Navbar
var header = document.createElement('header');
var navbar = document.createElement('nav');
navbar.classList.add('bg-primary', 'navbar');
var navContainer = document.createElement('div');
navContainer.classList.add('navbar-container');
body.appendChild(header);
header.appendChild(navbar);
navbar.appendChild(navContainer);
var logo = document.createElement('a');
logo.setAttribute('href', '#');
logo.classList.add('navbar-brand', 'ms-5');
logo.textContent = "<Job Finder/>";
navContainer.appendChild(logo);
// const divUl = document.createElement('div')
// divUl.classList.add('collapse', 'navbar-collapse')
var ul = document.createElement('ul');
ul.classList.add('navbar-nav', 'flex-row', 'me-5');
var li1 = document.createElement('li');
li1.classList.add('me-3');
var aLi1 = document.createElement('a');
li1.classList.add('nav-item');
aLi1.textContent = "Home";
aLi1.setAttribute('href', './home.html');
var li2 = document.createElement('li');
var aLi2 = document.createElement('a');
li2.classList.add('nav-item');
aLi2.setAttribute('href', './add-job.html');
aLi2.textContent = "Create Job";
navContainer.appendChild(ul);
ul.appendChild(li1);
li1.appendChild(aLi1);
ul.appendChild(li2);
li2.appendChild(aLi2);
