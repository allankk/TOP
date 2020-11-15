import fooString from "./foo.js";
import bar from "./bar-cjs";
import "./logo-on-white-bg.jpg";
import './style.css';
import printMe from './print.js';

console.log(fooString, bar);

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = "hello from webpack";
    element.classList.add('hello');

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
