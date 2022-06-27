var homeCards = document.getElementById('home-cards');
// Funciones que traen los filtros desde la DB
var locationsFilter = document.getElementById('filter-locations');
var senioritiesFilter = document.getElementById('filter-seniorities');
var categoriesFilter = document.getElementById('filter-categories');
var loadLocationsFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/locations')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var id_1 in data) {
            for (var prop in data[id_1]) {
                if (prop == "name") {
                    var option = document.createElement('option');
                    option.textContent = data[id_1][prop];
                    option.setAttribute('value', data[id_1][prop]);
                    locationsFilter.appendChild(option);
                }
            }
        }
    });
};
loadLocationsFilter();
var loadSenioritiesFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/seniorities')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var id_2 in data) {
            for (var prop in data[id_2]) {
                if (prop == "name") {
                    var option = document.createElement('option');
                    option.textContent = data[id_2][prop];
                    option.setAttribute('value', data[id_2][prop]);
                    senioritiesFilter.appendChild(option);
                }
            }
        }
    });
};
loadSenioritiesFilter();
var loadCategoriesFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/categories')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // console.log(data)
        for (var id_3 in data) {
            for (var prop in data[id_3]) {
                console.log(data[id_3].id);
                if (prop == "name") {
                    var option = document.createElement('option');
                    option.textContent = data[id_3][prop];
                    option.setAttribute('value', data[id_3][prop]);
                    categoriesFilter.appendChild(option);
                }
            }
        }
    });
};
loadCategoriesFilter();
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var loadCards = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // console.log(data)
        for (var id_4 in data) {
            // console.log(data[id])
            var card = document.createElement('div');
            card.classList.add('card');
            var divTags = document.createElement('div');
            divTags.classList.add('d-flex');
            for (var prop in data[id_4]) {
                // console.log(prop)
                if (prop == 'title') {
                    var h5 = document.createElement('h5');
                    var text = document.createTextNode(data[id_4][prop]);
                    card.appendChild(h5);
                    h5.appendChild(text);
                }
                else if (prop == "description") {
                    var p = document.createElement('p');
                    var text = document.createTextNode(data[id_4][prop]);
                    p.classList.add('description-card');
                    card.appendChild(p);
                    p.appendChild(text);
                    // card.app
                }
                else if (prop == 'location' || prop == 'seniority' || prop == 'category') {
                    var p = document.createElement('p');
                    var textP = document.createTextNode(data[id_4][prop]);
                    p.classList.add('bg-info', 'card-tags');
                    divTags.appendChild(p);
                    p.appendChild(textP);
                }
            }
            card.appendChild(divTags);
            var buttonDetailes = document.createElement('a');
            buttonDetailes.textContent = "See Details";
            buttonDetailes.classList.add('btn', 'btn-primary', 'btn-details');
            buttonDetailes.setAttribute('href', "./job-details.html?id=".concat(data[id_4].id));
            card.appendChild(buttonDetailes);
            homeCards.appendChild(card);
        }
    });
};
loadCards();
