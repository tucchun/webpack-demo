// import _ from 'lodash';
import printMe from './vendor.js';


function component() {
  // async function getComponent() {
  var element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // return element;

  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!11';
  element.innerHTML = 'hello webpack';
  element.appendChild(br);
  element.appendChild(button);


  button.onclick = printMe;
  return element;



}

document.body.appendChild(component());

// getComponent().then(component => {
//   document.body.appendChild(component)
// });
