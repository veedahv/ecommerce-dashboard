
const sideNavItems = document.querySelectorAll('.side-nav-list-item'),
categoryCardDiv = document.querySelector('.category-card-div'),
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
naira = '&#8358;';
let itemFavCardItem;

function itemCount() {
noItems.forEach(function (noItem) {
    noItem.innerText = cartRowDiv.childElementCount;
})
}

const removeCart = () => {
if (cartRowDiv.childElementCount === 0) {
    console.log('== 0');
    cartRowContain.style.display = 'none'
    emptyCart.style.display = 'flex'
} else {
    console.log('!= 0');
    cartRowContain.style.display = 'block'
    emptyCart.style.display = 'none'
    console.log(emptyCart.className);

}
}

const newCartItem = (itemPrice, itemImg, itemName, itemSpan) => {
let totalPrice = parseInt(itemPrice) * itemSpan;
const newItem = `
<div class="cart-row-inner-div row mt-3">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="${itemImg}" class="card-img" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                    <div class="row">
                                    <div class="col-md-6">
                                        <h5 class="card-title">${itemName}</h5>
                                        <p class="card-text">
                                        <span class="">&#8358;</span>
                                        <span>${itemPrice}</span>
                                        </p>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="d-flex flex-column">
                                                <div class="">
                                                    <button class="btn btn-main plus-btn">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                    <span class="item-qty">${itemSpan}</span>
                                                    <button class="btn btn-main subtract-btn">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                                <div class="">
                                                </div>
                                                <div class="mt-3">
                                                    <span class="">&#8358;</span>
                                                    <span class="total-price">${totalPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;


cartRowDiv.innerHTML += newItem;
const plusBtns = cartRowDiv.querySelectorAll('.plus-btn');
const subtractBtns = cartRowDiv.querySelectorAll('.subtract-btn');
plusBtns.forEach(function addQty(plusBtn) {
    plusBtn.addEventListener('click', function (event) {
        console.log('yo')
        itemSpan = itemSpan + 1;
        console.log(itemSpan);
        totalPrice = parseInt(itemPrice) * itemSpan;
        console.log(totalPrice);
        let cartRowInnerDiv = plusBtn.closest('.cart-row-inner-div');
        cartRowInnerDiv.querySelector('.total-price').innerHTML = totalPrice;
        cartRowInnerDiv.querySelector('.item-qty').innerHTML = itemSpan;
    })
})
subtractBtns.forEach(function addQty(subtractBtn) {
    subtractBtn.addEventListener('click', function (event) {
        console.log('yo-')
        itemSpan = itemSpan - 1;
        console.log(itemSpan);
        totalPrice = parseInt(itemPrice) * itemSpan;
        console.log(totalPrice);
        let cartRowInnerDiv = subtractBtn.closest('.cart-row-inner-div');
        cartRowInnerDiv.querySelector('.total-price').innerHTML = totalPrice;
        cartRowInnerDiv.querySelector('.item-qty').innerHTML = itemSpan;
    })
})

// let cartObject = {
//     productImg: cardImg.src,
//     productName: itemName.innerText,
//     productPrice: initialPrice.innerHTML,
//     productQuantity: itemSpan.innerText,
// }
// localStorage.setItem('cartRowDivItems', JSON.stringify(cartObject));

itemCount();
console.log('ooooo');

}

const savedProduct = localStorage.getItem('cartRowDivItems');

// if (savedProduct) {
//     console.log(JSON.parse(savedProduct));
// }

const checkImg = (itemImg) => {
for (let i = 0; i < cartRowDiv.childElementCount; i++) {
    console.log(cartRowDiv.childElementCount);
    console.log(cartRowDiv.querySelector('.card-img').src);
    console.log(itemImg);
    if (cartRowDiv.children[i].querySelector('.card-img').src === itemImg) {
        console.log('sometjing');
        cartRowDiv.children[i].remove();
    } else {
        console.log('not sometjing');
    }
}
}

const newFavItem = (checkFav, favHeart, itemFavCard, itemFavCardPrice, itemFavCardName, itemFavCardImg) => {
const FavItem = `<div class="card item-card-box mb-3">
                            <img src=${itemFavCardImg} class="card-img-top" alt="...">
                            <div class="card-body item-12">
                                <div class="d-flex justify-content-between align-items-center">
                                <p class="item-price">
                                    <span>&#8358;</span> <span>${itemFavCardPrice}</span>
                                </p>
                                    <i class="fa fa-heart add-to-fav" aria-hidden="true"></i>
                                </div>
                                <p class="item-name">${itemFavCardName}</p>
                            </div>
                        </div>`;

function checkClass() {
    console.log(favCardDiv.childElementCount);
    for (let i = 0; i < favCardDiv.childElementCount; i++) {
        console.log(favCardDiv.children[i].children[1].className);
        console.log(itemFavCard.children[1].className);
        if (favCardDiv.children[i].querySelector('.card-img-top').src === itemFavCard.querySelector('.card-img-top').src) {
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
    favCardDiv.innerHTML += FavItem;
    // favCardDiv.appendChild(FavItem);
} else {
    favHeart.classList.add('fa-heart-o');
    favHeart.classList.remove('fa-heart');
    checkClass();
    console.log('its working so');
}
const removeHearts = favCardDiv.querySelectorAll('.fa-heart');
removeHearts.forEach(function (removeHeart) {
    removeHeart.addEventListener('click', function (event) {
        let itemRemoveCard = removeHeart.closest('.item-card-box');
        console.log(categoryCardDiv.childElementCount);
        for (let i = 0; i < categoryCardDiv.childElementCount; i++) {
            if (categoryCardDiv.children[i].querySelector('.card-img-top').src === itemRemoveCard.querySelector('.card-img-top').src) {
                console.log('sometjing');
                favHeart.classList.add('fa-heart-o');
                favHeart.classList.remove('fa-heart');
            } else {
                console.log('not sometjing');
            }
        }
        itemRemoveCard.remove();
    })
})
}

btnCarts.forEach(function (btnCart) {
btnCart.addEventListener('click', (event) => {
    let itemPriceCard = btnCart.closest('.item-card-box');
    let itemPrice = itemPriceCard.querySelector('.item-price').children[1].innerText;
    let itemName = itemPriceCard.querySelector('.item-name').innerText;
    let itemImg = itemPriceCard.querySelector('.card-img-top').src;
    let itemSpan = 1;
    if (btnCart.children[0].innerText === 'Add to cart') {
        console.log('lah');
        btnCart.children[0].innerText = 'Remove from cart'
        newCartItem(itemPrice, itemImg, itemName, itemSpan);
    } else {
        console.log('lahlah');
        checkImg(itemImg)
        btnCart.children[0].innerText = 'Add to cart'
    }
    console.log(itemImg);
    console.log(itemPrice);
    console.log(itemName);
    console.log('its working');
    console.log(cartRowDiv.hasChildNodes());
    removeCart()
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
// plusBtnn.addEventListener('click', function (event) {
//     console.log('its working');
//     newCartItem();
//     localStorage.setItem('cartRowDivItems', cartRowDiv.innerHTML);
// })
clearBtn.addEventListener('click', function (event) {
console.log('its working too');
localStorage.clear()
while (cartRowDiv.firstChild) {
    cartRowDiv.removeChild(cartRowDiv.firstChild)
}
removeCart()
btnCarts.forEach(function (btnCart) {
    if (btnCart.children[0].innerText === 'Remove from cart') {
        console.log('lah');
        btnCart.children[0].innerText = 'Add to cart'
    }
})
})

itemCount();
removeCart();
