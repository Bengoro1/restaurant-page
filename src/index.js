import createElement from './page.js';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

document.body.style.backgroundImage = "url('./Good_Food_Display_-_NCI_Visuals_Online.jpg')";
document.body.style.backgroundSize = '100vw';

const footer = document.createElement('div');
document.body.appendChild(footer);
footer.classList.add('footer');
const signature = document.createElement('div');
let d = new Date();
let year = d.getFullYear();
signature.textContent = `Copyright © Bengoro1 ${year}`;
signature.setAttribute('class', 'signature');
footer.appendChild(signature);
const gitLogo = document.createElement('img');
gitLogo.setAttribute('src', './github.jpg');
gitLogo.setAttribute('alt', 'Logo');
gitLogo.setAttribute('class', 'git-logo');
gitLogo.setAttribute('onclick', "window.open('https://github.com/Bengoro1','_newtab');");
signature.appendChild(gitLogo);

const content = document.getElementById('content');

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.classList.add('home-button');
content.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.classList.add('menu-button');
content.appendChild(menuButton);

const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';
contactButton.classList.add('contact-button');
content.appendChild(contactButton);

homeButton.addEventListener('click', () => {
  while (content.childElementCount > 3) {
    content.removeChild(content.lastChild);
  }
  for (const obj in homePage) {
    createElement(homePage[obj]);
  }
});

menuButton.addEventListener('click', () => {
  while (content.childElementCount > 3) {
    content.removeChild(content.lastChild);
  }
  for (const obj in menuPage) {
    createElement(menuPage[obj]);
  }
});

contactButton.addEventListener('click', () => {
  while (content.childElementCount > 3) {
    content.removeChild(content.lastChild);
  }
  for (const obj in contactPage) {
    createElement(contactPage[obj]);
  }
});

homeButton.click();
