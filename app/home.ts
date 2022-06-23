const homeCards = document.getElementById('home-cards')

const loadCards = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
        .then(response => response.json())
        .then(data => {

            // console.log(data)

            for(const id in data) {

                // console.log(data[id])
                const card = document.createElement('div')
                card.classList.add('card')

                for(const prop in data[id]) {

                    console.log(prop)

                    if (prop == 'title') {

                        const h4 = document.createElement('h4')
                        const text = document.createTextNode(data[id][prop])
            
                        card.appendChild(h4)
                        h4.appendChild(text)
                    } else if (prop == "description") {

                        const p = document.createElement('p')
                        // card.app
                    } else if (prop == 'location' || prop == 'seniority' || prop == 'category') {
                        const p = document.createElement('p')
                        const textP = document.createTextNode(data[id][prop])

                        card.appendChild(p)
                        p.appendChild(textP)
                
                    } 
                } 
                homeCards.appendChild(card)
                // const button = document.createElement('button')
                // button.innerText = "See Details"
                // button.classList.add('btn btn-primary')
                // card.appendChild(button)
            }   
        })
     
}

loadCards()
