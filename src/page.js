function createElement(el) {
  if (!el.element) {
    return
  }
  let elem = document.createElement(el.element);
  if (el.text) {
    elem.textContent = el.text;
  }
  if (el.attribute) {
    for (const attr in el.attribute) {
      elem.setAttribute(attr, el.attribute[attr]);
    }
  }
  if (el.class) {
    el.classList.add(el.class)
  }
  if (el.price) {
    const elPri = document.createElement('p');
    elPri.classList.add('price');
    elPri.textContent = el.price;
    elem.appendChild(elPri);
  }
  content.appendChild(elem);
}

export default createElement;
