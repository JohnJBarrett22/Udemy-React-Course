"use strict";

console.log("App.js is running");

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: "Put Your Life In The Hands of a Computer"

};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var user = {
    name: 'John',
    age: 37,
    location: 'North Hollywood'
};
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
