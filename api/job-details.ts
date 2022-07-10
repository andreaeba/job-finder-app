const cardJobDetails = document.getElementById('card-details') as HTMLElement

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

const loadCardJobDetails = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/')

    .then(response => response.json())
    .then(data => {
        
        let jobsDetails = data

        const divTags = document.createElement('div')
        divTags.classList.add('d-flex')

        const divBtns = document.createElement('div')
        divBtns.classList.add('d-flex')

        jobsDetails.forEach(element => {

            if(element.id === params.get('id')) {

                // title

                const h4 = document.createElement('h4')
                const textH4 = document.createTextNode(element.title)
                h4.appendChild(textH4)
                cardJobDetails.appendChild(h4)

                // description

                const p = document.createElement('p')
                const textP = document.createTextNode(element.description)
                p.appendChild(textP)

                cardJobDetails.appendChild(p)

                // // location

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

                cardJobDetails.appendChild(divTags)

                const btnEdit = document.createElement('a')
                btnEdit.textContent = "Edit job"
                btnEdit.setAttribute('href', `./edit-job.html?id=${data[id].id}`)
                btnEdit.classList.add('btn', 'btn-success', 'me-2')
                    
                const btnDelete = document.createElement('a')
                btnDelete.textContent = "Delete job"
                btnDelete.classList.add('btn', 'btn-danger')
                btnDelete.setAttribute('href', `./delete-job.html?id=${data[id].id}`)

                divBtns.appendChild(btnEdit)   
                divBtns.appendChild(btnDelete)

                cardJobDetails.appendChild(divBtns)

            }
        })
    })
}

loadCardJobDetails()