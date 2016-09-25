/* jslint es6 */
const remote = require('electron').remote;
const {Menu, MenuItem} = remote;
const main = remote.require('./main.js')

const menu = new Menu();
menu.append(new MenuItem({label: 'MenuItem1', click() { alert('item 1 clicked') }}));
menu.append(new MenuItem({type: 'separator'}));
menu.append(new MenuItem({label: 'MenuItem2', type: 'checkbox', checked: true}));

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup(remote.getCurrentWindow())
}, false);

let button = document.createElement('button')
button.textContent = 'Wanna see a bear?'
button.addEventListener('click', () => {
    main.openWindow('bear.html')
}, false)
document.body.appendChild(button)

button = document.createElement('button')
button.textContent = 'roll some dice?'
button.addEventListener('click', () => {
    let dice3d = require('dice3d')
    let result = Math.floor(Math.random() * 7)
    dice3d(6, result, () => {
        console.log('hey')
    })
}, false)
document.body.appendChild(button)
