const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
}
var image_links;


image_links = ['https://tinyurl.com/265rrx39', 'https://tinyurl.com/ycy9x5ht', 'https://tinyurl.com/4xtbcras'];
let element_list_image = document.getElementById('list-image');
element_list_image.setAttribute("src", image_links[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_list_image2 = document.getElementById('list-image');
  image_links.push(image_links.shift());
  element_list_image2.setAttribute("src", image_links[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_list_image3 = document.getElementById('list-image');
  image_links.unshift(image_links.pop());
  element_list_image3.setAttribute("src", image_links[0]);

});
document.getElementById('add1').addEventListener('click', (event) => {
  let element_my_cart = document.getElementById('my_cart');
  let new_li = document.createElement('li');
  new_li.innerText = 'Goat Milk Shampoo 500ml  Price:$ 7.00';

  element_my_cart.appendChild(new_li);

});

document.getElementById('add2').addEventListener('click', (event) => {
  let element_my_cart2 = document.getElementById('my_cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Moisturising Bodywash 500ml  Price: $ 8.99';

  element_my_cart2.appendChild(new_li2);

});

document.getElementById('add3').addEventListener('click', (event) => {
  let element_my_cart3 = document.getElementById('my_cart');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Honeyfix Facewash 400ml  Pirce: $ 5.99 ';

  element_my_cart3.appendChild(new_li3);

});

document.getElementById('add4').addEventListener('click', (event) => {
  let element_my_cart4 = document.getElementById('my_cart');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Aloevera Gel (hair and face) 100g  Price: $ 4.01';

  element_my_cart4.appendChild(new_li4);

});

document.getElementById('add5').addEventListener('click', (event) => {
  let element_my_cart5 = document.getElementById('my_cart');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Cold Pressed Almond Oil 400ml  Price: $ 5.97';

  element_my_cart5.appendChild(new_li5);

});
var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comment = [];


document.getElementById('post_comment').addEventListener('click', (event) => {
  comment.shift();
  comment.push(getNumberOrString(document.getElementById('text').value));
  let element_comment_list = document.getElementById('comment_list');
  element_comment_list.innerText = comment[0];

});