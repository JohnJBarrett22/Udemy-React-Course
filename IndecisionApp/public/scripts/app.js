'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'John',
    cities: ['North Hollywood', 'Bakersfield', 'Young'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();
