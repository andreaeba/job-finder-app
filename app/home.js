var inicializarPagina = function () {
    loadCards();
};
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
                // console.log(data[id].id )
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
window.onload = inicializarPagina();
// Filters in URL
locationsFilter.addEventListener('change', function (e) {
    var params = new URLSearchParams(window.location.search);
    params.set('location', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString();
    loadCardsWithFilter();
});
senioritiesFilter.addEventListener('change', function (e) {
    var params = new URLSearchParams(window.location.search);
    params.set('seniority', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString();
});
categoriesFilter.addEventListener('change', function (e) {
    var params = new URLSearchParams(window.location.search);
    params.set('category', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString();
});
var jobsFilters = [];
var searchFilters = function () {
    if (params.get('location')) {
        var locationSelected = params.get('location');
        console.log("".concat(locationSelected));
        fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            jobsFilters = data.filter(function (job) { return job.location == params.get('location'); });
            // console.log(jobsFilters)
            if (params.get('seniority')) {
                jobsFilters = jobsFilters.filter(function (job) { return job.seniority == params.get('seniority'); });
                // console.log(jobsFilters)
                if (params.get('category')) {
                    jobsFilters = jobsFilters.filter(function (job) { return job.category == params.get('category'); });
                    console.log(jobsFilters);
                    jobsFilters.forEach(function (element) {
                        // console.log(element)
                        homeCards.innerHTML = "";
                        var card = document.createElement('div');
                        card.classList.add('card');
                        var divTags = document.createElement('div');
                        divTags.classList.add('d-flex');
                        homeCards.appendChild(card);
                        for (var prop in element) {
                            console.log(prop, element[prop]);
                            if (prop == 'title') {
                                var h5 = document.createElement('h5');
                                var text = document.createTextNode(element[prop]);
                                card.appendChild(h5);
                                h5.appendChild(text);
                            }
                            else if (prop == "description") {
                                var p = document.createElement('p');
                                var text = document.createTextNode(element[prop]);
                                p.classList.add('description-card');
                                card.appendChild(p);
                                p.appendChild(text);
                            }
                            else if (prop == 'location' || prop == 'seniority' || prop == 'category') {
                                var p = document.createElement('p');
                                var textP = document.createTextNode(element[prop]);
                                p.classList.add('bg-info', 'card-tags');
                                divTags.appendChild(p);
                                p.appendChild(textP);
                            }
                        }
                        card.appendChild(divTags);
                        var buttonDetailes = document.createElement('a');
                        buttonDetailes.textContent = "See Details";
                        buttonDetailes.classList.add('btn', 'btn-primary', 'btn-details');
                        buttonDetailes.setAttribute('href', "./job-details.html?id=".concat(element["id"]));
                        card.appendChild(buttonDetailes);
                    });
                }
            }
        });
    }
};
searchFilters();
