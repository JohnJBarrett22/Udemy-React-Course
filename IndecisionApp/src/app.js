console.log("App.js is running")

//JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: "Put Your Life In The Hands of a Computer",
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options" }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'John',
    age: 37,
    location: 'North Hollywood'
}
function getLocation (location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
//Turnary Operator Exmaple
// Logical And Operator x2
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);