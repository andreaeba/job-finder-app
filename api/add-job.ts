const formAddJob = document.getElementById('formID')

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

    const createJobs = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
    await fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs', createJobs)

    //  window.location.reload()
})

