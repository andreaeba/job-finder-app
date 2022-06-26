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
