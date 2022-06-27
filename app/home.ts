const homeCards = document.getElementById('home-cards') as HTMLElement

// Funciones que traen los filtros desde la DB

const locationsFilter = document.getElementById('filter-locations') as HTMLElement
const senioritiesFilter = document.getElementById('filter-seniorities') as HTMLElement
const categoriesFilter = document.getElementById('filter-categories') as HTMLElement

const loadLocationsFilter = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/locations')
        .then(response => response.json())
        .then(data => {

            for(let id in data) {

                for(const prop in data[id]) {

                    if(prop == "name") {

                        const option = document.createElement('option')
                        option.textContent = data[id][prop]
                        option.setAttribute('value', data[id][prop])

                        locationsFilter.appendChild(option)

                    }
                }
            }
        })
}

loadLocationsFilter()

const loadSenioritiesFilter = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/seniorities')
        .then(response => response.json())
        .then(data => {

            for(let id in data) {

                for(let prop in data[id]) {

                    if(prop == "name") {

                        const option = document.createElement('option')
                        option.textContent = data[id][prop]
                        option.setAttribute('value', data[id][prop])

                        senioritiesFilter.appendChild(option)

                    }  
                }
            }
        })
}

loadSenioritiesFilter()


const loadCategoriesFilter = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/categories')
        .then(response => response.json())
        .then(data => {

            // console.log(data)

            for(let id in data) {

                for(let prop in data[id]) {

                    console.log(data[id].id )

                    if(prop == "name") {

                        const option = document.createElement('option')
                        option.textContent = data[id][prop]
                        option.setAttribute('value', data[id][prop])

                        categoriesFilter.appendChild(option)

                    }
                }
            }

        })

}

loadCategoriesFilter()

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

const loadCards = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
        .then(response => response.json())
        .then(data => {

            
            
            // console.log(data)

            for(const id in data) {

                // console.log(data[id])
                const card = document.createElement('div')
                card.classList.add('card')

                const divTags = document.createElement('div')
                divTags.classList.add('d-flex')

                
                

                for(const prop in data[id]) {

                    // console.log(prop)

                    if (prop == 'title') {

                        const h5 = document.createElement('h5')
                        const text = document.createTextNode(data[id][prop])
            
                        card.appendChild(h5)
                        h5.appendChild(text)
                    } else if (prop == "description") {

                        const p = document.createElement('p')
                        const text = document.createTextNode(data[id][prop])
                        p.classList.add('description-card')

                        card.appendChild(p)
                        p.appendChild(text)
                        // card.app
                    } else if (prop == 'location' || prop == 'seniority' || prop == 'category') {

                        
                        const p = document.createElement('p')
                        const textP = document.createTextNode(data[id][prop])
                        p.classList.add('bg-info', 'card-tags')

                       
                        divTags.appendChild(p)
                        p.appendChild(textP)
                
                    } 
                    
                } 
                card.appendChild(divTags)
                

                const buttonDetailes = document.createElement('a')
                buttonDetailes.textContent = "See Details"
                buttonDetailes.classList.add('btn', 'btn-primary', 'btn-details')
                buttonDetailes.setAttribute('href', `./job-details.html?id=${data[id].id}`)
                card.appendChild(buttonDetailes)

                homeCards.appendChild(card)
            }   
        })
     
}

loadCards()

