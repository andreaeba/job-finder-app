var cardJobDetails = document.getElementById('card-details');
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var loadCardJobDetails = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var jobsDetails = data;
        var divTags = document.createElement('div');
        divTags.classList.add('d-flex');
        var divBtns = document.createElement('div');
        divBtns.classList.add('d-flex');
        jobsDetails.forEach(function (element) {
            if (element.id === params.get('id')) {
                // title
                var h4 = document.createElement('h4');
                var textH4 = document.createTextNode(element.title);
                h4.appendChild(textH4);
                cardJobDetails.appendChild(h4);
                // description
                var p = document.createElement('p');
                var textP = document.createTextNode(element.description);
                p.appendChild(textP);
                cardJobDetails.appendChild(p);
                // // location
                var p_location = document.createElement('p');
                var text_location = document.createTextNode(element.location);
                p_location.classList.add('bg-info', 'card-tags');
                p_location.appendChild(text_location);
                divTags.appendChild(p_location);
                // seniority
                var p_seniority = document.createElement('p');
                var text_seniority = document.createTextNode(element.seniority);
                p_seniority.classList.add('bg-info', 'card-tags');
                p_seniority.appendChild(text_seniority);
                divTags.appendChild(p_seniority);
                // category
                var p_category = document.createElement('p');
                var text_category = document.createTextNode(element.category);
                p_category.classList.add('bg-info', 'card-tags');
                p_category.appendChild(text_category);
                divTags.appendChild(p_category);
                cardJobDetails.appendChild(divTags);
                var btnEdit = document.createElement('a');
                btnEdit.textContent = "Edit job";
                btnEdit.setAttribute('href', "./edit-job.html?id=".concat(data[id].id));
                btnEdit.classList.add('btn', 'btn-success', 'me-2');
                var btnDelete = document.createElement('a');
                btnDelete.textContent = "Delete job";
                btnDelete.classList.add('btn', 'btn-danger');
                btnDelete.setAttribute('href', "./delete-job.html?id=".concat(data[id].id));
                divBtns.appendChild(btnEdit);
                divBtns.appendChild(btnDelete);
                cardJobDetails.appendChild(divBtns);
            }
        });
    });
};
loadCardJobDetails();
