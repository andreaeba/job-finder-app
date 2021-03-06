const formAddJob = document.getElementById('formID') as HTMLElement 

// Funciones que traen los filtros desde la DB

const locationsFilter = document.getElementById('filter-locations') as HTMLElement
const senioritiesFilter = document.getElementById('filter-seniorities') as HTMLElement
const categoriesFilter = document.getElementById('filter-categories') as HTMLElement

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

fetch(`https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        formAddJob.title.value = data.title
        formAddJob.description.value = data.description
        formAddJob.location.value = data.location
        formAddJob.seniority.value = data.seniority
        formAddJob.category.value = data.category

})

formAddJob.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        title: e.target.title.value,
        description: e.target.description.value,
        location: e.target.location.value,
        seniority: e.target.seniority.value,
        category: e.target.category.value

    }

    console.log(payload)

    const editJob = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    await fetch(`https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/${id}`, editJob)

    window.location.href = window.location.pathname + "/../index.html"

})