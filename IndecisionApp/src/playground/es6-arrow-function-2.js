//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    return a + b;
};
 console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'John',
    cities: ['North Hollywood', 'Bakersfield', 'Young'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived()