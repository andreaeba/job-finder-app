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
var formAddJob = document.getElementById('formID');
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
        console.log(data);
        for (var id_3 in data) {
            for (var prop in data[id_3]) {
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
fetch("https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/".concat(id))
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
    formAddJob.title.value = data.title;
    formAddJob.description.value = data.description;
    formAddJob.location.value = data.location;
    formAddJob.seniority.value = data.seniority;
    formAddJob.category.value = data.category;
});
formAddJob.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var payload, editJob;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                payload = {
                    title: e.target.title.value,
                    description: e.target.description.value,
                    location: e.target.location.value,
                    seniority: e.target.seniority.value,
                    category: e.target.category.value
                };
                console.log(payload);
                editJob = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                };
                return [4 /*yield*/, fetch("https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs/".concat(id), editJob)];
            case 1:
                _a.sent();
                window.location.href = window.location.pathname + "/../index.html";
                return [2 /*return*/];
        }
    });
}); });
