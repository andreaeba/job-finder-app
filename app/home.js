var homeCards = document.getElementById('home-cards');
// Funciones que traen los filtros desde la DB
var locationsFilter = document.getElementById('filter-locations');
var senioritiesFilter = document.getElementById('filter-seniorities');
var categoriesFilter = document.getElementById('filter-categories');
var loadLocationsFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/locations')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var id in data) {
            for (var prop in data[id]) {
                if (prop == "name") {
                    var option = document.createElement('option');
                    option.textContent = data[id][prop];
                    option.setAttribute('value', data[id][prop]);
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
        for (var id in data) {
            for (var prop in data[id]) {
                if (prop == "name") {
                    var option = document.createElement('option');
                    option.textContent = data[id][prop];
                    option.setAttribute('value', data[id][prop]);
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
        console.log(data);
        for (var id in data) {
            for (var prop in data[id]) {
                if (prop == "name") {
                    var option = document.createElement('option');
                    option.textContent = data[id][prop];
                    option.setAttribute('value', data[id][prop]);
                    categoriesFilter.appendChild(option);
                }
            }
        }
    });
};
loadCategoriesFilter();
var loadCards = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // console.log(data)
        for (var id in data) {
            // console.log(data[id])
            var card = document.createElement('div');
            card.classList.add('card');
            var divTags = document.createElement('div');
            divTags.classList.add('d-flex');
            for (var prop in data[id]) {
                // console.log(prop)
                if (prop == 'title') {
                    var h5 = document.createElement('h5');
                    var text = document.createTextNode(data[id][prop]);
                    card.appendChild(h5);
                    h5.appendChild(text);
                }
                else if (prop == "description") {
                    var p = document.createElement('p');
                    var text = document.createTextNode(data[id][prop]);
                    p.classList.add('description-card');
                    card.appendChild(p);
                    p.appendChild(text);
                    // card.app
                }
                else if (prop == 'location' || prop == 'seniority' || prop == 'category') {
                    var p = document.createElement('p');
                    var textP = document.createTextNode(data[id][prop]);
                    p.classList.add('bg-info', 'card-tags');
                    divTags.appendChild(p);
                    p.appendChild(textP);
                }
            }
            card.appendChild(divTags);
            var buttonDetailes = document.createElement('a');
            buttonDetailes.textContent = "See Details";
            buttonDetailes.classList.add('btn', 'btn-primary', 'btn-details');
            buttonDetailes.setAttribute('href', "./job-details.html?id=".concat(id));
            card.appendChild(buttonDetailes);
            homeCards.appendChild(card);
        }
    });
};
loadCards();
