const cardJobDetails = document.getElementById('card-details') as HTMLElement

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

const loadCardJobDetails = () => {

    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/')

    .then(response => response.json())
    .then(data => {
        
        const divTags = document.createElement('div')
        divTags.classList.add('d-flex')

        const divBtns = document.createElement('div')
        divBtns.classList.add('d-flex')

        for(let id in data) {

            for(let prop in data[id]) {

                if(data[id][prop] == params.get('id')) {

                    for(let prop in data[id]) {

                        if(prop == "title") {

                            const h4 = document.createElement('h4')
                            h4.textContent = `${data[id][prop]}`
    
                            cardJobDetails.appendChild(h4)

                        } else if(prop == "description") {

                            const p = document.createElement('p')
                            p.textContent = `${data[id][prop]}`

                            cardJobDetails.appendChild(p)
                        }else if(prop == 'location' || prop == 'seniority' || prop == 'category') {

                            const p = document.createElement('p')
                            const textP = document.createTextNode(data[id][prop])
                            p.classList.add('bg-info', 'card-tags-details')
    
                           
                            divTags.appendChild(p)
                            p.appendChild(textP)
                        }
                        
                    }      
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


                }
            }
            cardJobDetails.appendChild(divTags)
            cardJobDetails.appendChild(divBtns)
            
            
            
            

        }

    })
}

loadCardJobDetails()