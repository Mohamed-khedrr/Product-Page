// DOM
const pageLinksList = document.querySelectorAll('a');
const sideBarClose = document.querySelector('#side-bar-close');
const sideBarOverlay = document.querySelector('#side-bar-overlay');
const sideBar = document.querySelector('.side-bar');
const menuIcon = document.querySelector('.menu-icon');
const mainImg = document.querySelector('#main-img');
const subImgsList = document.querySelectorAll('.sub-img');
const cartModal = document.querySelector('.cart-modal');
const cartIcon = document.querySelector('.modal-cart-icon');
let subImgparent = subImgsList[0].parentElement;
const plusIcon = document.querySelector('.plus');
const minusIcon = document.querySelector('.minus');
const modalCartContent = document.querySelector('.modal-cart-content');
const itemsNum = document.querySelector('.items-num');

//Global Variables 
let subImgCounter = 1;
let productCounter = 0;

// disable links action
for (let i = 0; i < pageLinksList.length; i++)
    pageLinksList[i].addEventListener('click', (e) => {
        e.preventDefault();
    })


// SideBar Close Action
//Close
sideBarClose.addEventListener('click', closeSideBar);
// Open
menuIcon.addEventListener('click', openSideBar);

function closeSideBar() {
    sideBar.style.cssText = `left:-100%`
    sideBarOverlay.style.cssText = 'display:none;'
}
function openSideBar() {
    sideBar.style.cssText = 'left:0;'
    sideBarOverlay.style.cssText = 'display:block;'

}

// Change Main img
setInterval(changeMainImg, 5000);

function changeMainImg() {

    // remove active class form previous parent
    subImgparent.classList.remove('active-img');

    //check counter 
    if (subImgCounter == subImgsList.length) {
        subImgCounter = 0;
    }

    // get the parent
    let sub = subImgsList[subImgCounter];
    subImgparent = sub.parentElement;

    //add active class the sub Parent
    subImgparent.classList.add('active-img');

    //  change mainImg Url
    mainImg.src = sub.src;

    // increment counter
    subImgCounter++;
}

// Toggle Cart Modal
cartIcon.addEventListener('click', toggleCartIcon)
function toggleCartIcon() {
    cartModal.classList.toggle('hidden');
}

// increase Product s
plusIcon.addEventListener('click', increaseProductsNum)
function increaseProductsNum() {
    productCounter++;
    checkCart()
}

// decrease Products 
minusIcon.addEventListener('click', decreaseProductsNum)
function decreaseProductsNum() {
    productCounter--;

    checkCart()
}

// check cart
function checkCart() {
    itemsNum.innerHTML = productCounter;
    if (productCounter == 0) {
        modalCartContent.innerHTML = `Your cart is empty`;
    } else {
        modalCartContent.innerHTML = `
        <img class="modal-product-img" src="assets/images/image-product-1.jpg">
            <p>
                <span class="product-num">${productCounter}</span> * fall limited edition Sneakers
                <span class="total-price">$${productCounter * 125}</span>
            </p>
            <img class="remove-cart pointer" src="assets/images/icon-delete.svg">
    
        `;
    }
}



