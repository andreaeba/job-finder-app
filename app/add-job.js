// Funciones que traen los filtros desde la DB
var locationsFilter = document.getElementById('filter-locations');
var senioritiesFilter = document.getElementById('filter-seniorities');
var categoriesFilter = document.getElementById('filter-categories');
var loadLocationsFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/locations')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var locations = data;
        locations.forEach(function (element) {
            var option = document.createElement('option');
            var textOption = document.createTextNode(element.name);
            option.appendChild(textOption);
            option.setAttribute('value', element.name);
            locationsFilter.appendChild(option);
        });
    });
};
loadLocationsFilter();
var loadSenioritiesFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/seniorities')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var seniorities = data;
        seniorities.forEach(function (element) {
            var option = document.createElement('option');
            var textOption = document.createTextNode(element.name);
            option.appendChild(textOption);
            option.setAttribute('value', element.name);
            senioritiesFilter.appendChild(option);
        });
    });
};
loadSenioritiesFilter();
var loadCategoriesFilter = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/categories')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var categories = data;
        categories.forEach(function (element) {
            var option = document.createElement('option');
            var textOption = document.createTextNode(element.name);
            option.appendChild(textOption);
            option.setAttribute('value', element.name);
            categoriesFilter.appendChild(option);
        });
    });
};
loadCategoriesFilter();
