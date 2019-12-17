// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
// const container = document.getElementById('app');
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a platzi')
//const name = 'Fer'
//const element = React.createElement('h1', {}, `Hola, soy ${name}`)
//const jsx = <h1>Hola soy, {name}</h1>
const container = document.getElementById('app');
const jsx = (
    <div>
        <h1>Hola soy Fernanda</h1>
        <p>Soy ingeniero :D</p>
    </div>
)

const element =  React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hello, I\'m Fernanda'),
    React.createElement('p', {}, 'I\'m software developer')
)


// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
