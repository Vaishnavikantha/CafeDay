// document.getElementById('add-cart-btn').addEventListener("mouseover", function() {
//     var addCartSpan = document.getElementById('add-cart-span');
//     // console.log(addCartSpan)
//     addCartSpan.ClassList.remove('d-none');
// });

function addCart(x) {
    if(x === 1) {
        var addCartSpan1 = document.getElementById('add-cart-span1');
        addCartSpan1.classList.remove('d-none');
    } else if(x === 2) {
        var addCartSpan2 = document.getElementById('add-cart-span2');
        addCartSpan2.classList.remove('d-none');
    } else if(x === 3) {
        var addCartSpan3 = document.getElementById('add-cart-span3');
        addCartSpan3.classList.remove('d-none');
    } else if(x === 4) {
        var addCartSpan4 = document.getElementById('add-cart-span4');
        addCartSpan4.classList.remove('d-none');
    } else if(x === 5) {
        var addCartSpan5 = document.getElementById('add-cart-span5');
        addCartSpan5.classList.remove('d-none');
    } else if(x === 6) {
        var addCartSpan6 = document.getElementById('add-cart-span6');
        addCartSpan6.classList.remove('d-none');
    } else if(x === 7) {
        var addCartSpan7 = document.getElementById('add-cart-span7');
        addCartSpan7.classList.remove('d-none');
    } else if(x === 8) {
        var addCartSpan8 = document.getElementById('add-cart-span8');
        addCartSpan8.classList.remove('d-none');
    } else if(x === 9) {
        var addCartSpan9 = document.getElementById('add-cart-span9');
        addCartSpan9.classList.remove('d-none');
    } else {
        var addCartSpan10 = document.getElementById('add-cart-span10');
        addCartSpan10.classList.remove('d-none');
    }
    
}

function removeCart(x) {
    if(x === 1) {
        var addCartSpan1 = document.getElementById('add-cart-span1');
        addCartSpan1.classList.add('d-none');
    } else if(x === 2) {
        var addCartSpan2 = document.getElementById('add-cart-span2');
        addCartSpan2.classList.add('d-none');
    } else if(x === 3) {
        var addCartSpan3 = document.getElementById('add-cart-span3');
        addCartSpan3.classList.add('d-none');
    } else if(x === 4) {
        var addCartSpan4 = document.getElementById('add-cart-span4');
        addCartSpan4.classList.add('d-none');
    } else if(x === 5) {
        var addCartSpan5 = document.getElementById('add-cart-span5');
        addCartSpan5.classList.add('d-none');
    } else if(x === 6) {
        var addCartSpan6 = document.getElementById('add-cart-span6');
        addCartSpan6.classList.add('d-none');
    } else if(x === 7) {
        var addCartSpan7 = document.getElementById('add-cart-span7');
        addCartSpan7.classList.add('d-none');
    } else if(x === 8) {
        var addCartSpan8 = document.getElementById('add-cart-span8');
        addCartSpan8.classList.add('d-none');
    } else if(x === 9) {
        var addCartSpan9 = document.getElementById('add-cart-span9');
        addCartSpan9.classList.add('d-none');
    } else if(x === 10) {
        var addCartSpan10 = document.getElementById('add-cart-span10');
        addCartSpan10.classList.add('d-none');
    }
}

// Swiper Carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });


let menu = document.querySelector('#menu-icon');
    // let navbar = document.querySelector('.navbar-nav');
    let nav = document.querySelector('.navbar-nav');
    
    menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('show');
    // nav.style.display = "flex";
    }
    
    window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('show');
    }