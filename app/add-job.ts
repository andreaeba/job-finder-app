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

            console.log(data)

            for(let id in data) {

                for(let prop in data[id]) {

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
