
const sideNavItems = document.querySelectorAll('.side-nav-list-item'),
    sideNav = document.querySelector('.side-nav'),
    home = document.querySelector('#home'),
    about = document.querySelector('#about'),
    categories = document.querySelector('#categories'),
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
    cartForm = document.querySelector('.cart-form'),
    cartHeaderLi = document.querySelector('.cart-header-li'),
    cartRowContain = document.querySelector('.cart-row-contain'),
    favCardDiv = document.querySelector('.fav-card-div'),
    emptyCart = document.querySelector('.empty-cart'),
    emptyFav = document.querySelector('.empty-fav'),
    clearFavDiv = document.querySelector('.clear-fav-div'),
    cartSpan = document.querySelector('.cart-no'),
    favHearts = document.querySelectorAll('.add-to-fav'),
    btnShops = document.querySelectorAll('.btn-shop'),
    btnCarts = document.querySelectorAll('.btn-cart'),
    qtyNos = document.querySelectorAll('.qty'),
    itemCardBox = document.querySelectorAll('.item-card-box'),
    noItems = document.querySelectorAll('.no-items'),
    plusBtnn = document.querySelector('.plus-btn'),
    clearBtn = document.querySelector('.clear-btn'),
    hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.close'),
    cvvError = document.querySelector('.cvv-error'),
    cardNoError = document.querySelector('.card-no-error'),
    cardCvv = document.querySelector('#card-cvv'),
    cardNo = document.querySelector('#card-no'),
    clearFav = document.querySelector('.clear-fav'),
    sumItemPrice = document.querySelector('.sum-item-price'),
    sumTotalPrice = document.querySelector('.sum-total-price'),
    favorites = document.querySelector('#favorites'),
    cart = document.querySelector('#cart'),
    naira = '&#8358;';
let cartArray = [];
let favArray = [];

let t = 0;

const savedCartArr = JSON.parse(localStorage.getItem('cartArrayItems'));
const savedFavArr = JSON.parse(localStorage.getItem('favArrayItems'));
function itemCount() {
    noItems.forEach(function (noItem) {
        noItem.innerText = cartRowDiv.childElementCount;
    })
}
function displayHome() {    
    home.style.display = 'block'
    about.style.display = 'none'
    categories.style.display = 'none'
    favorites.style.display = 'none'
    cart.style.display = 'none'
}
displayHome();
const removeCart = () => {
    if (cartRowDiv.childElementCount === 0) {
        console.log('== 0');
        cartRowContain.style.display = 'none'
        emptyCart.style.display = 'flex'
    } else {
        console.log('!= 0');
        cartRowContain.style.display = 'block'
        emptyCart.style.display = 'none'
    }
}
const removeFav = () => {
    if (favCardDiv.childElementCount === 0) {
        console.log('== 0');
        emptyFav.style.display = 'flex'
        clearFavDiv.style.display = 'none'
    } else {
        console.log('!= 0');
        emptyFav.style.display = 'none'
        clearFavDiv.style.display = 'flex'
    }
}
// function sumItemPriceFunc() {
//     sumItemPrice.innerText = 
// }
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
t = t + totalPrice;
sumItemPrice.innerHTML = t;
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
            localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
            t = t + totalPrice;
            sumItemPrice.innerHTML = t;
            sumTotalPrice.innerHTML = t + 2000;
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
            localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
            t = t + totalPrice;
            sumItemPrice.innerHTML = t;
        })
    })
    itemCount();
}
cartHeaderLi.addEventListener('click', function (event) {    
    home.style.display = 'none'
    about.style.display = 'none'
    categories.style.display = 'none'
    favorites.style.display = 'none'
    cart.style.display = 'block'    
})
hamburger.addEventListener('click', function (event) {
    sideNav.classList.add('side-nav-show')
})
close.addEventListener('click', function (event) {
    sideNav.classList.remove('side-nav-show');
})
btnShops.forEach( (btnShop) => {
    btnShop.addEventListener('click', function (event) {
        home.style.display = 'none'
        about.style.display = 'none'
        categories.style.display = 'block'
        favorites.style.display = 'none'
        cart.style.display = 'none'        
    })
})
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

const createFavItem = (itemFavCardPrice, itemFavCardName, itemFavCardImg) => {
    const FavItem = `<div class="card item-card-box mb-3">
                                <img src=${itemFavCardImg} class="card-img-top" alt="...">
                                <div class="card-body item-12">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <i class="fa fa-heart add-to-fav" aria-hidden="true"></i>
                                    </div>
                                    <p class="item-price">
                                        <span>&#8358;</span> <span>${itemFavCardPrice}</span>
                                    </p>
                                    <p class="item-name">${itemFavCardName}</p>
                                </div>
                            </div>`;
                            favCardDiv.innerHTML += FavItem;
                        }
const newFavItem = (checkFav, favHeart, itemFavCard, itemFavCardPrice, itemFavCardName, itemFavCardImg) => {

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
        createFavItem(itemFavCardPrice, itemFavCardName, itemFavCardImg);
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

favHearts.forEach(function (favHeart) {
    favHeart.addEventListener('click', function (event) {
        let checkFav = favHeart.classList.contains('fa-heart-o');
        console.log(checkFav);
        let itemFavCard = favHeart.closest('.item-card-box');
        let itemFavCardName = itemFavCard.querySelector('.item-name').innerText;
        let itemFavCardPrice = itemFavCard.querySelector('.item-price').children[1].innerText;
        let itemFavCardImg = itemFavCard.querySelector('.card-img-top').src;
        console.log('its working');
        let favObject = {
            productImg: itemFavCardImg,
            productName: itemFavCardName,
            productPrice: itemFavCardPrice,
        }
        favArray.push(favObject);
        console.log(favArray);
        newFavItem(checkFav, favHeart, itemFavCard, itemFavCardPrice, itemFavCardName, itemFavCardImg);
        localStorage.setItem('favArrayItems', JSON.stringify(favArray));
        console.log(favCardDiv.hasChildNodes());
        console.log(itemFavCard);


    })
})
btnCarts.forEach(function (btnCart) {
    btnCart.addEventListener('click', (event) => {
        let itemPriceCard = btnCart.closest('.item-card-box');
        let itemPrice = itemPriceCard.querySelector('.item-price').children[1].innerText;
        let itemName = itemPriceCard.querySelector('.item-name').innerText;
        let itemImg = itemPriceCard.querySelector('.card-img-top').src;
        let itemSpan = 1;

        let cartObject = {
            productImg: itemImg,
            productName: itemName,
            productPrice: itemPrice,
            productQuantity: itemSpan,
        }
        cartArray.push(cartObject);
        console.log(cartArray);
    
        if (btnCart.children[0].innerText === 'Add to cart') {
            console.log('lah');
            btnCart.children[0].innerText = 'Remove from cart'
            newCartItem(itemPrice, itemImg, itemName, itemSpan);
        localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
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
const itemBoxContainers = document.querySelectorAll('.item-card-box');
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
if (savedCartArr) {
    JSON.parse(localStorage.getItem('cartArrayItems'));
    // localStorage.getItem('cartArrayItems');
    console.log(savedCartArr);
    localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
    savedCartArr.forEach((cartArrayItem) => {
        cartArray.push(cartArrayItem)
    })
} else {
    console.log('local empty');
}
if (savedFavArr) {
    localStorage.getItem('favArrayItems');
    console.log(savedFavArr);
    localStorage.setItem('favArrayItems', JSON.stringify(favArray));
    savedFavArr.forEach((favArrayItem) => {
        favArray.push(favArrayItem)
    })
} else {
    console.log('local empty');
}
favArray.forEach((favArr) => {
    itemFavCardImg = favArr.productImg;
    itemFavCardName = favArr.productName;
    itemFavCardPrice = favArr.productPrice;
    createFavItem(itemFavCardPrice, itemFavCardName, itemFavCardImg);
})
cartArray.forEach((cartArr) => {
    itemImg = cartArr.productImg;
    itemName = cartArr.productName;
    itemPrice = cartArr.productPrice;
    itemSpan = cartArr.productQuantity;
    totalPrice = cartArr.productSum;
    console.log(itemImg);

    newCartItem(itemPrice, itemImg, itemName, itemSpan);
})
itemBoxContainers.forEach( (itemBoxContainer) => {
    let favHrt = itemBoxContainer.querySelector('.add-to-fav');
    for (let i = 0; i < favCardDiv.childElementCount; i++) {
        if (favCardDiv.children[i].querySelector('.card-img-top').src === itemBoxContainer.querySelector('.card-img-top').src) {
            console.log('sometjing');
            favHrt.classList.add('fa-heart');
            favHrt.classList.remove('fa-heart-o');
        } else {
            console.log('not sometjing');
        }   
    }     
    for (let i = 0; i < cartRowDiv.childElementCount; i++) {
        let btnCart = itemBoxContainer.querySelector('.btn-cart');
        if (cartRowDiv.children[i].querySelector('.card-img').src === itemBoxContainer.querySelector('.card-img-top').src) {
            console.log('sometjing');
            btnCart.children[0].innerText = 'Remove from cart';
        } else {
            console.log('not sometjing');
        }   
    }     
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
clearFav.addEventListener('click', function (event) {
    console.log('its working too');
    localStorage.clear()
    while (favCardDiv.firstChild) {
        favCardDiv.removeChild(favCardDiv.firstChild)
    }
})
cartForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let checkCvv = cardCvv.value;
    let checkCardNo = cardNo.value;
    if (checkCardNo.length !== 16) {
        cardNoError.innerText = 'invalid card no';
    } else {
        cardNoError.innerText = '';
    }
    if (checkCvv.length !== 3) {
        cvvError.innerText = 'invalid cvv no';
    } else {
        cvvError.innerText = '';
    }
    cardCvv.value = '';
    cardNo.value = '';
})

itemCount();
removeCart();
removeFav();
function checkClassCategory(x) {
    console.log(categoryCardDiv.childElementCount);
    for (let i = 0; i < categoryCardDiv.childElementCount; i++) {
        let categoryChildName = categoryCardDiv.children[i].classList.contains(x);
        console.log(categoryChildName);
        if (categoryChildName) {
            categoryCardDiv.children[i].style.display = 'block';
        } else {
            categoryCardDiv.children[i].style.display = 'none';
        }
    }
}
categoryBtns.forEach(
    function (categoryBtn) {
        categoryBtn.addEventListener('click', function (event) {
            switch (event.target.id) {
                case 'shirts':
                    checkClassCategory('shirts')
                    break;
                case 'bottoms':
                    checkClassCategory('bottoms')
                    break;
                case 'dresses':
                    checkClassCategory('dresses')
                    break;
                case 'two-piece':
                    checkClassCategory('two-piece')
                    break;
                case 'accessories':
                    checkClassCategory('accessories')
                    break;
                case 'shoes':
                    checkClassCategory('shoes')
                    break;

                default:
                    checkClassCategory('item')
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
                    console.log(event.target.id)
                    home.style.display = 'block'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    sideNav.classList.remove('side-nav-show')
                    break;
                case 'about-li':
                    home.style.display = 'none'
                    about.style.display = 'block'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    sideNav.classList.remove('side-nav-show')
                    break;
                case 'categories-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'block'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    sideNav.classList.remove('side-nav-show')
                    break;
                case 'favorites-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'block'
                    cart.style.display = 'none'
                    sideNav.classList.remove('side-nav-show')
                    break;
                case 'cart-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'block'
                    sideNav.classList.remove('side-nav-show')
                    break;

                default:
                    break;
            }
        })
    }
)
