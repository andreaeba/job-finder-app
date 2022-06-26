var locationsFilter = document.getElementById('filter-locations');
var senioritiesFilter = document.getElementById('filter-seniorities');
var categoriesFilter = document.getElementById('filter-categories');
var homeCards = document.getElementById('home-cards');
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
            for (var prop in data[id]) {
                // console.log(prop)
                if (prop == 'title') {
                    var h4 = document.createElement('h4');
                    var text = document.createTextNode(data[id][prop]);
                    card.appendChild(h4);
                    h4.appendChild(text);
                }
                else if (prop == "description") {
                    var p = document.createElement('p');
                    // card.app
                }
                else if (prop == 'location' || prop == 'seniority' || prop == 'category') {
                    var p = document.createElement('p');
                    var textP = document.createTextNode(data[id][prop]);
                    card.appendChild(p);
                    p.appendChild(textP);
                }
            }
            homeCards.appendChild(card);
            // const button = document.createElement('button')
            // button.innerText = "See Details"
            // button.classList.add('btn btn-primary')
            // card.appendChild(button)
        }
    });
};
loadCards();
