var selectHomePage = document.getElementById('select-form');
var loadCard = function () {
    fetch('https://62aa61db371180affbd48229.mockapi.io/jobsfinder/jobs.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        for (var prop in data) {
            var card = document.createElement('div');
            card.classList.add('card');
            for (var key in data[prop]) {
                if (key == 'title') {
                    var h3 = document.createElement('p');
                    var text = document.createTextNode("Title: ".concat(data[prop][key]));
                    card.appendChild(h3);
                    h3.appendChild(text);
                }
                else if (key == 'location' && key == 'seniority' && key == 'category') {
                    var p = document.createElement('p');
                    var textP = document.createTextNode("".concat(key, ": ") + data[prop][key]);
                    card.appendChild(p);
                    p.appendChild(textP);
                }
            }
            var button = document.createElement('button');
            button.innerText = "See Details";
            button.classList.add('btn btn-primary');
            card.appendChild(button);
        }
    });
};
loadCard();
