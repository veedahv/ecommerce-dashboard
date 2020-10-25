
const sideNavItems = document.querySelectorAll('.side-nav-list-item'),
    home = document.querySelector('#home'),
    about = document.querySelector('#about'),
    categories = document.querySelector('#categories'),
    categoryBtns = document.querySelectorAll('.category-btn'),
    notificationLi = document.querySelector('.notification-li'),
    notificationContain = document.querySelector('.notification-contain'),
    shirts = document.querySelector('#shirts'),
    bottoms = document.querySelector('.bottoms'),
    dresses = document.querySelector('.dresses'),
    twoPiece = document.querySelector('.two-piece'),
    accessories = document.querySelector('.accessories'),
    shoes = document.querySelector('.shoes'),
    cartRowDiv = document.querySelector('.cart-row-div'),
    favCardDiv = document.querySelector('.fav-card-div'),
    emptyCart = document.querySelector('.empty-cart'),
    favHearts = document.querySelectorAll('.add-to-fav'),
    btnCarts = document.querySelectorAll('.btn-cart'),
    itemCardBox = document.querySelectorAll('.item-card-box'),
    noItems = document.querySelectorAll('.no-items'),
    plusBtnn = document.querySelector('.plus-btn'),
    subBtnn = document.querySelector('.subtract-btn'),
    clearFav = document.querySelector('.clear-fav'),
    favorites = document.querySelector('#favorites'),
    cart = document.querySelector('#cart'),
    settings = document.querySelector('#settings');
let itemPrice;
let itemPriceCurrency;
let itemImg;
let itemFavCardItem;

function itemCount() {
    noItems.forEach(function (noItem) {
        noItem.innerText = cartRowDiv.childElementCount;

    })
}
function removeCart() {
    if (cartRowDiv.childElementCount === 0) {
        console.log('== 0');
    } else {
        console.log('!= 0');
    }
}
function newCartItem() {
    const cartRow = document.createElement('div'),
        cartCol8 = document.createElement('div'),
        cartCol4 = document.createElement('div'),
        cartCard = document.createElement('div'),
        cardRow = document.createElement('div'),
        cardCol8 = document.createElement('div'),
        cardCol4 = document.createElement('div'),
        cardBody = document.createElement('div'),
        cartItemFlex = document.createElement('div'),
        cardItemCount = document.createElement('div'),
        cardItemPrice = document.createElement('div'),
        cardImg = document.createElement('img'),
        itemName = document.createElement('p'),
        initialPrice = document.createElement('p'),
        totalPrice = document.createElement('p'),
        itemSpan = document.createElement('span'),
        plusBtn = document.createElement('button'),
        plusBtnIcon = document.createElement('i'),
        subtractBtn = document.createElement('button'),
        subtractBtnIcon = document.createElement('i');
    cartRow.className = 'row cart-row';
    cartCol8.className = 'col-md-8';
    cartCol4.className = 'col-md-4';
    cartItemFlex.className = 'd-flex';
    cartCard.className = 'card mb-3';
    cardRow.className = 'row no-gutters';
    cardCol8.className = 'col-md-7';
    cardCol4.className = 'col-md-5';
    cardBody.className = 'card-body';
    cardImg.className = 'card-img';
    subtractBtnIcon.className = 'fa fa-minus';
    plusBtnIcon.className = 'fa fa-plus';
    initialPrice.innerText = 'ixox'
    plusBtn.appendChild(plusBtnIcon);
    subtractBtn.appendChild(subtractBtnIcon);
    cardItemCount.appendChild(plusBtn);
    cardItemCount.appendChild(itemSpan);
    cardItemCount.appendChild(subtractBtn);
    cardItemPrice.appendChild(initialPrice);
    cardItemPrice.appendChild(totalPrice);
    cartItemFlex.appendChild(cardItemCount);
    cartItemFlex.appendChild(cardItemPrice);
    cardCol4.appendChild(cardImg);
    cardCol8.appendChild(cardBody);
    cardBody.appendChild(itemName);
    cardRow.appendChild(cardCol4);
    cardRow.appendChild(cardCol8);
    cartCard.appendChild(cardRow);
    cartCol8.appendChild(cartCard);
    cartCol4.appendChild(cartItemFlex);
    cartRow.appendChild(cartCol8);
    cartRow.appendChild(cartCol4);
    cartRowDiv.appendChild(cartRow);
    initialPrice.innerHTML = itemPriceCurrency.innerHTML + itemPrice.innerText;
    itemName.innerText = itemPrice.innerHTML;
    cardImg.src = itemImg.src;
    let x = 1;
    itemSpan.innerText = x;
    totalPrice.innerText = itemPrice.innerText * x;
    plusBtn.addEventListener('click', function (event) {
        localStorage.getItem('cartRowDivItems');
        console.log('pls work na');
        x = x + 1;
        itemSpan.innerText = x;
        totalPrice.innerText = parseInt(itemPrice.innerText) * x;
        localStorage.setItem('favCardDivItems', favCardDiv.innerHTML);
    })
    subtractBtn.addEventListener('click', function (event) {
        console.log('pls work');
        x = x - 1;
        itemSpan.innerText = x;
        totalPrice.innerText = parseInt(itemPrice.innerText) * x;
    })
    itemCount();
}
function newFavItem(checkFav, favHeart, itemFavCard) {
    const FavItem = document.createElement('div');
    FavItem.className = 'card item-card-box mb-3';
    function checkClass() {
        console.log(favCardDiv.childElementCount);
        for (let i = 0; i < favCardDiv.childElementCount; i++) {
            console.log(favCardDiv.children[i].children[1].className);
            console.log(itemFavCard.children[1].className);
            if (favCardDiv.children[i].children[1].className === itemFavCard.children[1].className) {
                console.log('sometjing');
                favCardDiv.children[i].remove();
            } else {
                console.log('not sometjing');
            }
        }
    }
    if (checkFav) {
        favHeart.classList.add('fa-heart');
        favHeart.classList.remove('fa-heart-o');
        FavItem.innerHTML = itemFavCardItem.innerHTML;
        favCardDiv.appendChild(FavItem);
    } else {
        favHeart.classList.add('fa-heart-o');
        favHeart.classList.remove('fa-heart');
        checkClass();
        console.log('its working so');
    }
}

favHearts.forEach(function (favHeart) {
    favHeart.addEventListener('click', function (event) {
        let checkFav = favHeart.classList.contains('fa-heart-o');
        console.log(checkFav);
        let itemFavCard = favHeart.closest('.item-card-box');
        itemFavCardItem = itemFavCard;
        console.log('its working');
        newFavItem(checkFav, favHeart, itemFavCard);
        localStorage.setItem('favCardDivItems', favCardDiv.innerHTML);
        console.log(favCardDiv.hasChildNodes());
        console.log(itemFavCard);


        // localStorage.removeItem('favCardDivItems');


    })
})
btnCarts.forEach(function (btnCart) {
    btnCart.addEventListener('click', function (event) {
        let itemPriceCard = btnCart.closest('.item-card-box');
        itemPriceCurrency = itemPriceCard.children[1].children[1].children[0];
        itemPrice = itemPriceCard.children[1].children[1].children[1];
        itemImg = itemPriceCard.children[0];
        console.log(itemImg.src);
        console.log('its working');
        newCartItem();
        localStorage.setItem('cartRowDivItems', cartRowDiv.innerHTML);
        console.log(cartRowDiv.hasChildNodes());

    })
})
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
plusBtnn.addEventListener('click', function (event) {
    console.log('its working');
    newCartItem();
    localStorage.setItem('cartRowDivItems', cartRowDiv.innerHTML);
})
subBtnn.addEventListener('click', function (event) {
    console.log('its working too');
    localStorage.clear()
    while (cartRowDiv.firstChild) {
        cartRowDiv.removeChild(cartRowDiv.firstChild)
    }
})
clearFav.addEventListener('click', function (event) {
    console.log('its working too');
    localStorage.clear()
    // localStorage.removeItem()
    while (favCardDiv.firstChild) {
        favCardDiv.removeChild(favCardDiv.firstChild)
    }
})
const saved = localStorage.getItem('cartRowDivItems');
const savedFav = localStorage.getItem('favCardDivItems');

// If there are any saved items, update our list
if (savedFav) {
    favCardDiv.innerHTML = savedFav;
}
if (saved) {
    cartRowDiv.innerHTML = saved;
}
itemCount();
removeCart();
categoryBtns.forEach(
    function (categoryBtn) {
        categoryBtn.addEventListener('click', function (event) {
            switch (event.target.id) {
                case 'shirts':
                    console.log('hmmm')
                    shirts.style.display = 'block'
                    bottoms.style.display = 'none'
                    dresses.style.display = 'none'
                    twoPiece.style.display = 'none'
                    accessories.style.display = 'none'
                    shoes.style.display = 'none'
                    break;
                case 'bottoms':
                    shirts.style.display = 'none'
                    bottoms.style.display = 'block'
                    dresses.style.display = 'none'
                    twoPiece.style.display = 'none'
                    accessories.style.display = 'none'
                    shoes.style.display = 'none'
                    break;
                case 'dresses':
                    shirts.style.display = 'none'
                    bottoms.style.display = 'none'
                    dresses.style.display = 'block'
                    twoPiece.style.display = 'none'
                    accessories.style.display = 'none'
                    shoes.style.display = 'none'
                    break;
                case 'two-piece':
                    shirts.style.display = 'none'
                    bottoms.style.display = 'none'
                    dresses.style.display = 'none'
                    twoPiece.style.display = 'block'
                    accessories.style.display = 'none'
                    shoes.style.display = 'none'
                    break;
                case 'accessories':
                    shirts.style.display = 'none'
                    bottoms.style.display = 'none'
                    dresses.style.display = 'none'
                    twoPiece.style.display = 'none'
                    accessories.style.display = 'block'
                    shoes.style.display = 'none'
                    break;
                case 'shoes':
                    shirts.style.display = 'none'
                    bottoms.style.display = 'none'
                    dresses.style.display = 'none'
                    twoPiece.style.display = 'none'
                    accessories.style.display = 'none'
                    shoes.style.display = 'block'
                    break;

                default:
                    break;
            }
        })
    }
)
sideNavItems.forEach(
    function (sideNavItem) {
        sideNavItem.addEventListener('click', function (event) {
            switch (event.target.id) {
                case 'home-li':
                    home.style.display = 'block'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'about-li':
                    home.style.display = 'none'
                    about.style.display = 'block'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'categories-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'block'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'favorites-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'block'
                    cart.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'cart-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'block'
                    settings.style.display = 'none'
                    break;
                case 'settings-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    settings.style.display = 'block'
                    break;

                default:
                    break;
            }
        })
    }
)
