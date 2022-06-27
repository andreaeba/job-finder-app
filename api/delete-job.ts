const formDelete = document.getElementById('delete-job') as HTMLElement

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

// Función para eliminar un job
                    
formDelete.addEventListener('submit', async (e) => {
    e.preventDefault()

    const deleteJob = {
        method: 'DELETE'  
    }

    await fetch(`https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/${id}`, deleteJob)

    window.location.href = window.location.pathname + "/../home.html"
})

const deleteCancel = document.getElementById('delete-cancel') as HTMLElement

deleteCancel.addEventListener('click', (e) => {

    window.location.href = `./job-details.html?id=${id}`

})