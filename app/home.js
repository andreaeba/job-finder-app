var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var inicializarPagina = function () {
    searchFilters();
};
var homeCards = document.getElementById('home-cards');
var locationsFilter = document.getElementById('filter-locations');
var senioritiesFilter = document.getElementById('filter-seniorities');
var categoriesFilter = document.getElementById('filter-categories');
var selectedLocation = document.getElementById('selected-location');
var formControl = document.getElementById('form-ctrl');
var formControlBtn = document.getElementById('search-btn');
var clearBtn = document.getElementById('clear-btn');
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
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
var searchFilters = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs')
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    var jobsFilters = data;
                    if (params.get('location')) {
                        jobsFilters = data.filter(function (job) { return job.location == params.get('location'); });
                    }
                    if (params.get('seniority')) {
                        jobsFilters = data.filter(function (job) { return job.seniority == params.get('seniority'); });
                    }
                    if (params.get('category')) {
                        jobsFilters = data.filter(function (job) { return job.category == params.get('category'); });
                    }
                    homeCards.innerHTML = "";
                    jobsFilters.forEach(function (element) {
                        var card = document.createElement('div');
                        card.classList.add('card');
                        var divTags = document.createElement('div');
                        divTags.classList.add('d-flex');
                        homeCards.appendChild(card);
                        // title
                        var h5 = document.createElement('h5');
                        var text_title = document.createTextNode(element.title);
                        card.appendChild(h5);
                        h5.appendChild(text_title);
                        // description
                        var p_description = document.createElement('p');
                        var text_d = document.createTextNode(element.description);
                        p_description.classList.add('description-card');
                        card.appendChild(p_description);
                        p_description.appendChild(text_d);
                        // location
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
                        card.appendChild(divTags);
                        var buttonDetailes = document.createElement('a');
                        buttonDetailes.textContent = "See Details";
                        buttonDetailes.classList.add('btn', 'btn-primary', 'btn-details');
                        buttonDetailes.setAttribute('href', "./job-details.html?id=".concat(element.id));
                        card.appendChild(buttonDetailes);
                    });
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
formControl.addEventListener('submit', function (e) {
    e.preventDefault();
    var params = new URLSearchParams(window.location.search);
    if (e.target.homeLocation.value !== "null") {
        params.set('location', e.target.homeLocation.value);
    }
    if (e.target.homeSeniority.value !== "null") {
        params.set('seniority', e.target.homeSeniority.value);
    }
    if (e.target.homeCategory.value !== "null") {
        params.set('category', e.target.homeCategory.value);
    }
    window.location.href = window.location.pathname + '?' + params.toString();
});
window.onload = inicializarPagina();
