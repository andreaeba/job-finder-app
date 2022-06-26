var cardJobDetails = document.getElementById('card-details');
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var loadCardJobDetails = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var id_1 in data) {
            var divTags = document.createElement('div');
            divTags.classList.add('d-flex');
            var divBtns = document.createElement('div');
            divBtns.classList.add('d-flex');
            for (var prop in data[id_1]) {
                if (data[id_1][prop] == params.get('id')) {
                    for (var prop_1 in data[id_1]) {
                        if (prop_1 == "title") {
                            var h4 = document.createElement('h4');
                            h4.textContent = "".concat(data[id_1][prop_1]);
                            cardJobDetails.appendChild(h4);
                        }
                        else if (prop_1 == "description") {
                            var p = document.createElement('p');
                            p.textContent = "".concat(data[id_1][prop_1]);
                            cardJobDetails.appendChild(p);
                        }
                        else if (prop_1 == 'location' || prop_1 == 'seniority' || prop_1 == 'category') {
                            var p = document.createElement('p');
                            var textP = document.createTextNode(data[id_1][prop_1]);
                            p.classList.add('bg-info', 'card-tags-details');
                            divTags.appendChild(p);
                            p.appendChild(textP);
                        }
                    }
                    var btnEdit = document.createElement('a');
                    btnEdit.textContent = "Edit job";
                    btnEdit.setAttribute('href', "./edit-job.html?id=".concat(parseInt(id_1) + 1));
                    btnEdit.classList.add('btn', 'btn-primary', 'me-2');
                    divBtns.appendChild(btnEdit);
                    var btnDelete = document.createElement('a');
                    btnDelete.textContent = "Delete job";
                    btnDelete.classList.add('btn', 'btn-primary');
                    // Viene la función para eliminar el job
                    divBtns.appendChild(btnDelete);
                }
            }
            cardJobDetails.appendChild(divTags);
            cardJobDetails.appendChild(divBtns);
        }
    });
};
loadCardJobDetails();
