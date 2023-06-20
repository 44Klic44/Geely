const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
 
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}




// модальное окно

let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let bodyy = document.getElementsByTagName('bodyy')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        bodyy.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        bodyy.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};



// pagination


const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabcontent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function (element) {
    element.addEventListener('click', open)
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__btn-item-active');
    })
    tabcontent.forEach(function (item) {
        item.classList.remove('tabs__content-item--active')
    })

    tabTarget.classList.add('tabs__btn-item-active')
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}






const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
   
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
   
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
   
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
