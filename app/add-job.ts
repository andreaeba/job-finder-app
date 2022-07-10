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
