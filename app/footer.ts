const body = document.body

const footer = document.createElement('footer')
footer.classList.add('footer-container','bg-primary')

const span = document.createElement('span')
span.textContent = "Created by Andrea"

body.appendChild(footer)
footer.appendChild(span)
