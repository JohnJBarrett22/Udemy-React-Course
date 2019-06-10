console.log("App.js is running")

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: "Put Your Life In The Hands of a Computer"

}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var user = {
    name: 'John',
    age: 37,
    location: 'North Hollywood'
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);