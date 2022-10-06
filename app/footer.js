var body = document.body;
var footer = document.createElement('footer');
footer.classList.add('footer-container', 'bg-primary');
var span = document.createElement('span');
span.textContent = "Created by Andrea";
body.appendChild(footer);
footer.appendChild(span);
