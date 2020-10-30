
const categoryCardDiv = document.querySelector('.category-card-div'),
    categoryBtns = document.querySelectorAll('.category-btn'),
    notificationLi = document.querySelector('.notification-li'),
    notificationContain = document.querySelector('.notification-contain'),
    shirts = document.querySelectorAll('.shirts'),
    bottoms = document.querySelectorAll('.bottoms'),
    dresses = document.querySelectorAll('.dresses'),
    twoPiece = document.querySelectorAll('.two-piece'),
    accessories = document.querySelectorAll('.accessories'),
    shoes = document.querySelectorAll('.shoes'),
    cartRowDiv = document.querySelector('.cart-row-div'),
    cartRowContain = document.querySelector('.cart-row-contain'),
    favCardDiv = document.querySelector('.fav-card-div'),
    emptyCart = document.querySelector('.empty-cart'),
    favHearts = document.querySelectorAll('.add-to-fav'),
    btnCarts = document.querySelectorAll('.btn-cart'),
    qtyNos = document.querySelectorAll('.qty'),
    itemCardBox = document.querySelectorAll('.item-card-box'),
    noItems = document.querySelectorAll('.no-items'),
    plusBtnn = document.querySelector('.plus-btn'),
    clearBtn = document.querySelector('.clear-btn'),
    clearFav = document.querySelector('.clear-fav'),
    favorites = document.querySelector('#favorites'),
    cart = document.querySelector('#cart'),
    naira = '&#8358;';

function itemCount() {
    noItems.forEach(function (noItem) {
        noItem.innerText = cartRowDiv.childElementCount;
    })
}

notificationLi.addEventListener('click', function (event) {
    console.log('its working noti');
    if (notificationContain.style.display === 'block') {
        notificationContain.style.display = 'none'
    } else {
        notificationContain.style.display = 'block'
    }
})
notificationLi.addEventListener('blur', function (event) {
    console.log('its working notiblur');
    notificationContain.style.display = 'none'

})
itemCount();
removeCart();
