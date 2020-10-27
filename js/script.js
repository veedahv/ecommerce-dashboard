
const sideNavItems = document.querySelectorAll('.side-nav-list-item'),
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
    cartRowContain = document.querySelector('.cart-row-contain'),
    favCardDiv = document.querySelector('.fav-card-div'),
    emptyCart = document.querySelector('.empty-cart'),
    favHearts = document.querySelectorAll('.add-to-fav'),
    btnCarts = document.querySelectorAll('.btn-cart'),
    itemCardBox = document.querySelectorAll('.item-card-box'),
    noItems = document.querySelectorAll('.no-items'),
    plusBtnn = document.querySelector('.plus-btn'),
    clearBtn = document.querySelector('.clear-btn'),
    clearFav = document.querySelector('.clear-fav'),
    favorites = document.querySelector('#favorites'),
    cart = document.querySelector('#cart'),
    settings = document.querySelector('#settings'),
    naira = '&#8358;';
let itemFavCardItem;

function itemCount() {
    noItems.forEach(function (noItem) {
        noItem.innerText = cartRowDiv.childElementCount;
    })
}


// // 1
// function sub(a, b) {
//     return a + b;
// }

// const sub = (a, b) => {
//     return a + b;
// }

// // 2
// function sub2(a, b) {
//     return a + b;
// }

// const sub2 = (a, b) =>  a + b;

// // 2 + 1
// function sub2Plus1(a) {
//     return a;
// }

// const sub2Plus1 = a =>  a + b;



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

const newCartItem = (itemPrice, itemImg, itemName) => {
    let itemSpan = 1,
        totalPrice = parseInt(itemPrice) * itemSpan;
    const newItem = `
    <div class="row">
                        <div class="col-md-12">
                            <div class="card mb-3">
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
                                            <span class="">${itemPrice}</span>
                                            </p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="d-flex flex-column">
                                                    <div class="">
                                                        <button class="plus-btn">
                                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                        <span>${itemSpan}</span>
                                                        <button class="subtract-btn">
                                                            <i class="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                    <div class="">
                                                    </div>
                                                    <div class="">
                                                        <span class="">&#8358;</span>
                                                        <span class="">${totalPrice}</span>
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
    // initialPrice.innerHTML = naira + itemPrice.innerText;
    // itemName.innerText = itemPrice.innerHTML;
    // cardImg.src = itemImg.src;
    // itemSpan.innerText = x;
    // totalPrice.innerText = itemPrice.innerText * x;
    const plusBtns = cartRowDiv.querySelectorAll('.plus-btn');
    // const cardImg = cartRowDiv.querySelector('.card-img');
    // cardImg.src = itemImg;
    plusBtns.forEach(function addQty(plusBtn) {
        plusBtn.addEventListener('click', function (event) {
            console.log('yo')
            // x = x + 1;
            itemSpan = itemSpan + 1;
            console.log(itemSpan);
            console.log(totalPrice);

            totalPrice = parseInt(itemPrice) * itemSpan;
        })
    })

    // subtractBtn.addEventListener('click', function (event) {
    //     console.log('pls work');
    //     x = x - 1;
    //     itemSpan.innerText = x;
    //     totalPrice.innerText = parseInt(itemPrice.innerText) * x;
    // })
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

const newFavItem = (checkFav, favHeart, itemFavCard) => {
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
    btnCart.addEventListener('click', (event) => {
        let itemPriceCard = btnCart.closest('.item-card-box');
        let itemPrice = itemPriceCard.querySelector('.item-price').children[1].innerText;
        let itemName = itemPriceCard.querySelector('.item-name').innerText;
        let itemImg = itemPriceCard.querySelector('.card-img-top').src;
        if (btnCart.children[0].innerText === 'Add to cart') {
            console.log('lah');
            btnCart.children[0].innerText = 'Remove from cart'
            newCartItem(itemPrice, itemImg, itemName);
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
})
clearFav.addEventListener('click', function (event) {
    console.log('its working too');
    localStorage.clear()
    // localStorage.removeItem()
    while (favCardDiv.firstChild) {
        favCardDiv.removeChild(favCardDiv.firstChild)
    }
})
const savedFav = localStorage.getItem('favCardDivItems');

// If there are any saved items, update our list
if (savedFav) {
    favCardDiv.innerHTML = savedFav;
}
itemCount();
removeCart();
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
