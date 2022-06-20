const selectHomePage = document.getElementById('select-form')

const loadCard = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs.json')
        .then(response => response.json())
        .then(data => {

            console.log(data)

            for(const prop in data) {

                const card = document.createElement('div')
                card.classList.add('card')

                for(const key in data[prop]) {

                    if (key == 'title') {

                        const h3 = document.createElement('p')
                        const text = document.createTextNode(`Title: ${data[prop][key]}`)
            
                        card.appendChild(h3)
                        h3.appendChild(text)

                    } else if (key == 'location' && key == 'seniority' && key == 'category') {
                        const p = document.createElement('p')
                        const textP = document.createTextNode(`${key}: `+ data[prop][key])

                        card.appendChild(p)
                        p.appendChild(textP)
                
                    } 
                } 
                const button = document.createElement('button')
                button.innerText = "See Details"
                button.classList.add('btn btn-primary')
                card.appendChild(button)
        }   }) 

     
}

loadCard()
