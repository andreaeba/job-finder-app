const inicializarPagina = () => {
    searchFilters()
}

const homeCards = document.getElementById('home-cards') as HTMLElement

const locationsFilter = document.getElementById('filter-locations') as HTMLElement
const senioritiesFilter = document.getElementById('filter-seniorities') as HTMLElement
const categoriesFilter = document.getElementById('filter-categories') as HTMLElement

const selectedLocation = document.getElementById('selected-location')

const formControl = document.getElementById('form-ctrl') as HTMLFormElement
const formControlBtn = document.getElementById('search-btn') as HTMLElement
const clearBtn = document.getElementById('clear-btn') as HTMLElement

const loadLocationsFilter = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/locations')
        .then(response => response.json())
        .then(data => {

            let locations = data

            locations.forEach(element => {

                const option = document.createElement('option')
                const textOption = document.createTextNode(element.name)
                option.appendChild(textOption)
                option.setAttribute('value', element.name)

                locationsFilter.appendChild(option)

            })
            
        })
}

loadLocationsFilter()

const loadSenioritiesFilter = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/seniorities')
        .then(response => response.json())
        .then(data => {

            let seniorities = data

            seniorities.forEach(element => {

                const option = document.createElement('option')
                const textOption = document.createTextNode(element.name)
                option.appendChild(textOption)
                option.setAttribute('value', element.name)

                senioritiesFilter.appendChild(option)

            })
        })
}

loadSenioritiesFilter()


const loadCategoriesFilter = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/categories')
        .then(response => response.json())
        .then(data => {

            let categories = data

            categories.forEach(element => {

                const option = document.createElement('option')
                const textOption = document.createTextNode(element.name)
                option.appendChild(textOption)
                option.setAttribute('value', element.name)

                categoriesFilter.appendChild(option)

            })
        })
}

loadCategoriesFilter()

const params = new URLSearchParams(window.location.search)

const id = params.get('id')


const searchFilters = async () => {


    await fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
        .then(response => response.json())
        .then(data => {

        let jobsFilters = data

        if(params.get('location')) {

            jobsFilters = data.filter(job => job.location == params.get('location')) 

        }
        if(params.get('seniority')) {
        
            jobsFilters = data.filter(job => job.seniority == params.get('seniority')) 

        }
        if(params.get('category')) {
    
            jobsFilters = data.filter(job => job.category == params.get('category')) 

        }

        
        homeCards.innerHTML = ""

        jobsFilters.forEach(element => {
        
            const card = document.createElement('div')
            card.classList.add('card')
    
            const divTags = document.createElement('div')
            divTags.classList.add('d-flex')
    
    
            homeCards.appendChild(card)

            // title
            const h5 = document.createElement('h5')
            const text_title = document.createTextNode(element.title)          
            card.appendChild(h5)
            h5.appendChild(text_title)

            // description
            const p_description = document.createElement('p')
            const text_d = document.createTextNode(element.description)
            p_description.classList.add('description-card')
            card.appendChild(p_description)
            p_description.appendChild(text_d)
    
            // location

            const p_location = document.createElement('p')
            const text_location = document.createTextNode(element.location)
            p_location.classList.add('bg-info', 'card-tags')
            p_location.appendChild(text_location)
            divTags.appendChild(p_location)

            // seniority

            const p_seniority = document.createElement('p')
            const text_seniority = document.createTextNode(element.seniority)
            p_seniority.classList.add('bg-info', 'card-tags')
            p_seniority.appendChild(text_seniority)
            divTags.appendChild(p_seniority)

            // category

            const p_category = document.createElement('p')
            const text_category = document.createTextNode(element.category)
            p_category.classList.add('bg-info', 'card-tags')
            p_category.appendChild(text_category)
            divTags.appendChild(p_category)

            card.appendChild(divTags)
    
            const buttonDetailes = document.createElement('a')
            buttonDetailes.textContent = "See Details"
            buttonDetailes.classList.add('btn', 'btn-primary', 'btn-details')
            buttonDetailes.setAttribute('href', `./job-details.html?id=${element.id}`)
            card.appendChild(buttonDetailes)
        });

    })   
                
}


formControl.addEventListener('submit', (e) => {
    e.preventDefault()

    const params = new URLSearchParams(window.location.search);

    if(e.target.homeLocation.value !== "null") {
        params.set('location', e.target.homeLocation.value);
    }
    
    if(e.target.homeSeniority.value !== "null") {
        params.set('seniority', e.target.homeSeniority.value);
    }
    if(e.target.homeCategory.value !== "null") {
        params.set('category', e.target.homeCategory.value);
    }    

    window.location.href = window.location.pathname + '?' + params.toString()

})


window.onload = inicializarPagina()