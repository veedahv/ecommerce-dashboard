
const sideNavItems = document.querySelectorAll('.side-nav-list-item'),
    sections = document.querySelectorAll('section'),
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
    cardForm = document.querySelector('.card-form'),
    searchForm = document.querySelector('.search-form'),
    searchBox = document.querySelector('.search-box'),
    paymentForm = document.querySelector('.payment-card'),
    cartHeaderLi = document.querySelector('.cart-header-li'),
    cartRowContain = document.querySelector('.cart-row-contain'),
    favCardDiv = document.querySelector('.fav-card-div'),
    emptyCart = document.querySelector('.empty-cart'),
    emptyFav = document.querySelector('.empty-fav'),
    clearFavDiv = document.querySelector('.clear-fav-div'),
    cartSpan = document.querySelector('#cart-no'),
    notiSpan = document.querySelector('#noti-no'),
    favHearts = document.querySelectorAll('.add-to-fav'),
    btnShops = document.querySelectorAll('.btn-shop'),
    btnCarts = document.querySelectorAll('.btn-cart'),
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
    cardDate = document.querySelector('#card-date'),
    clearFav = document.querySelector('.clear-fav'),
    commentBtn = document.querySelector('.comment-btn'),
    messageContain = document.querySelector('.message-div-contain'),
    userImg = document.querySelector('.user-img-div'),
    sumItemPrice = document.querySelector('.sum-item-price'),
    sumTotalPrice = document.querySelector('.sum-total-price'),
    proceedBtn = document.querySelector('.btn-proceed'),
    checkBtn = document.querySelector('.btn-check-out'),
    paymentTxt = document.querySelector('.payment-txt'),
    cancelPayBtn = document.querySelector('.cancel-pay-btn'),
    cancelProceedBtn = document.querySelector('.cancel-proceed-btn'),
    continuePayBtn = document.querySelector('.continue-pay-btn'),
    deliveryLocation = document.querySelector('#delivery-location'),
    deliveryOption = document.querySelector('#delivery-option'),
    favorites = document.querySelector('#favorites'),
    preloader = document.querySelector('.pre-loader-div'),
    cart = document.querySelector('#cart'),
    naira = '&#8358;';
let cartArray = [];
let favArray = [];
let userInfoArr = [];

let t = 0;
function preloadAdd() {
    preloader.style.zIndex = '5';
    preloader.style.opacity = '1';
}
function preloadRemove() {
    preloader.style.opacity = '0';
    preloader.style.zIndex = '-5';
}
setTimeout(preloadRemove, 1000);
let possibleQnA = {
    "Good evening": "Evening, how may I help you?",
    "how long for delivery?": "5 to 10 working days for standard delivery. 3 to 5 working days for express delivery",
    "ok": ":)",
    "thank you": "You are welcome",
};

// function talk() {

//     var user = document.getElementById("userBox").value;
//     document.getElementById("userBox").value = "";

//     document.getElementById("chatLog").innerHTML += user+"<br>";

//     if (user in know) {
//         document.getElementById("chatLog").innerHTML += know[user]+"<br>";
//     } else {
//         document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
//     }
// }

const savedCartArr = JSON.parse(localStorage.getItem('cartArrayItems'));
const savedFavArr = JSON.parse(localStorage.getItem('favArrayItems'));
const savedUserArr = localStorage.getItem('userProfileImg');
// const savedUserArr = JSON.parse(localStorage.getItem('userInfoArrProfile'));
// localStorage.setItem('userInfoArrProfile', JSON.stringify(userInfoArr));
// localStorage.setItem('userProfileImg', blob);
if (savedCartArr) {
    JSON.parse(localStorage.getItem('cartArrayItems'));
    console.log(savedCartArr);
    savedCartArr.forEach((cartArrayItem) => {
        cartArray.push(cartArrayItem)
    })
    localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
}
if (savedFavArr) {
    localStorage.getItem('favArrayItems');
    console.log(savedFavArr);
    savedFavArr.forEach((favArrayItem) => {
        favArray.push(favArrayItem)
    })
    localStorage.setItem('favArrayItems', JSON.stringify(favArray));
}
// if (savedUserArr) {
//     // JSON.parse(localStorage.getItem('userInfoArrProfile')); 
//                     // localStorage.setItem('userProfileImg', blob);   
//     // localStorage.getItem('userInfoArrProfile');    
//     localStorage.getItem('userProfileImg');    
//     // console.log(savedUserArr.userImg);
//     userImg.innerHTML = savedUserArr;
//     // userImg.src = savedUserArr.userImg;
//     // userImgSrc = URL.createObjectURL(savedUserArr.userImg);
//     // userImg.src = userImgSrc;
//     console.log(savedUserArr);
//     console.log(userImg.innerHTML);
// }
function checkSectionId(x) {
    sections.forEach((section) => {
        if (section.id === x) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    })
}
function checkSideNav(x) {
    preloadAdd()
    setTimeout(preloadRemove, 800);
    sideNavItems.forEach((sideNavItem) => {
        if (sideNavItem.id === x) {
            sideNavItem.classList.add('nav-active');
        } else {
            sideNavItem.classList.remove('nav-active');
        }
        if (x === 'cart-li') {
            cartHeaderLi.classList.add('nav-active');
        } else {
            cartHeaderLi.classList.remove('nav-active');
        }
    })
}
// const dpChild = (x) => {
//         let dp = x.closest('.side-nav-list-item');
//         if (dp.id === 'profile-li') {
//             profile.classList.add('nav-active');
//         } else {
//             profile.classList.remove('nav-active');
//         }
// }
function itemCount() {
    noItems.forEach(function (noItem) {
        noItem.innerText = cartRowDiv.childElementCount;
    })
}
function displayHome() {
    checkSectionId('home');
    checkSideNav('home-li');
}
displayHome();
const removeCart = () => {
    if (cartRowDiv.childElementCount === 0) {
        console.log('== 0');
        cartRowContain.style.display = 'none'
        emptyCart.style.display = 'flex'
        cartSpan.style.display = 'none'
    } else {
        console.log('!= 0');
        cartRowContain.style.display = 'block'
        cartSpan.style.display = 'flex'
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
function checkClassCategoryType(x) {
    for (let i = 0; i < categoryCardDiv.childElementCount; i++) {
        xLowerCase = x.toLowerCase();
        let categoryChildName = categoryCardDiv.children[i].classList.contains(xLowerCase);
        if (categoryChildName) {
            categoryCardDiv.children[i].style.display = 'block';
        } else {
            categoryCardDiv.children[i].style.display = 'none';
        }
    }
}
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let searchInput = searchBox.value;
    checkSectionId('categories')
    checkSideNav('categories-li')
    checkClassCategoryType(searchInput);

})
// commentBtn.addEventListener('click', (event) => {
//     if (messageContain.style.display === 'none') {
//         messageContain.style.display = 'block'
//     } else {
//         messageContain.style.display = 'none'
//     }
// })
const newCartItem = (itemPrice, itemImg, itemName, itemSpan) => {
    let totalPrice = parseInt(itemPrice) * itemSpan;
    const newItem = `
    <div class="cart-row-inner-div row mt-3">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="${itemImg}" class="card-img cart-new-img h-100" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <div class="row">
                                        <div class="col-md-6">
                                            <h5 class="card-title cart-item-name">${itemName}</h5>
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
            t = t - totalPrice;
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
            if (itemSpan <= 1) {
                console.log('yo-1')
            } else {
                console.log('yo-')
                t = t - totalPrice;
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
            }
        })
    })
    itemCount();
}
cartHeaderLi.addEventListener('click', function (event) {
    checkSectionId('cart')
    checkSideNav('cart-li')
})
hamburger.addEventListener('click', function (event) {
    sideNav.classList.remove('side-nav-show-out')
    sideNav.classList.add('side-nav-show-in');
    sideNav.classList.add('side-nav-show');
})
const removeSideNav = () => {
    sideNav.classList.remove('side-nav-show');
}
const removNav = () => {
    sideNav.classList.remove('side-nav-show-in')
    sideNav.classList.add('side-nav-show-out');
    setTimeout(removeSideNav, 400)
}
close.addEventListener('click', function (event) {
    removNav();
})
// let imgLog = document.querySelector('#img-input');
// let imgBox = document.querySelector('#img-box');
// let imgBoxContain = document.querySelector('.img-box-contain');
// let imgBoxNew = document.querySelector('#img-box-new');
// let imgBoxfram = document.querySelector('.form-img-div');
// let imgBtn = document.querySelector('.btn-box');
// let el = document.getElementById('img-box');
// let vanilla = new Croppie(el, {
//     viewport: {
//         enableExif: true,
//         width: 80,
//         height: 80,
//         type: 'circle'
//     },
//     boundary: {
//         height: 150
//     },
//     showZoomer: false,
// });
// imgLog.addEventListener('change', (event) => {
//     imgBox.src = URL.createObjectURL(imgLog.files[0]);

//     vanilla.bind({
//         url: imgBox.src,
//     });
//     console.log(imgLog)
// })
// imgBtn.addEventListener('click', function (event) {
//     //on button click
//     vanilla.result('blob').then(function (blob) {
//         console.log(blob.size);
//         console.log(blob.type);
//         console.log(blob);

//         imgBoxNew.src = URL.createObjectURL(blob, blob.type);
//         // localStorage.setItem('userProfileImg', blob)
//         localStorage.setItem('userProfileImg', vanilla)
//         // let userInfo = {
//         //     userImg: imgBoxNew.src,
//         // }
//         // userInfoArr = userInfo;

//         // do something with cropped blob

//         imgBoxfram.style.display = 'block';
//         imgBoxContain.style.display = 'none';
//         imgBtn.style.display = 'none';
//     });
// })
btnShops.forEach((btnShop) => {
    btnShop.addEventListener('click', function (event) {
        checkSectionId('categories');
        checkSideNav('categories-li');
    })
})
const removeFavItem = (itemFavCardImg) => {
    favArray.forEach((favArr) => {
        if (itemFavCardImg === favArr.productImg) {
            let favArrIndex = favArray.indexOf(favArr);
            favArray.splice(favArrIndex, 1);
            localStorage.setItem('favArrayItems', JSON.stringify(favArray));
            console.log(favArray)
        }
    })
}
const removeCartItem = (itemImg) => {
    cartArray.forEach((cartArr) => {
        if (cartArr.productImg === itemImg) {
            let cartArrIndex = cartArray.indexOf(cartArr);
            cartArray.splice(cartArrIndex, 1);
            localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
            console.log(cartArray)
        }
    })
}
const checkImg = (itemImg) => {
    for (let i = 0; i < cartRowDiv.childElementCount; i++) {
        if (cartRowDiv.children[i].querySelector('.card-img').src === itemImg) {
            console.log('sometjing');
            removeCartItem(itemImg);
            cartRowDiv.children[i].remove();
        }
    }
}
const createFavItem = (itemFavCardPrice, itemFavCardName, itemFavCardImg) => {
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
    favCardDiv.innerHTML += FavItem;
    const removeHearts = favCardDiv.querySelectorAll('.fa-heart');
    const homeBoxs = home.querySelectorAll('.item-card-box');
    removeHearts.forEach(function (removeHeart) {
        removeHeart.addEventListener('click', function (event) {
            let itemRemoveCard = removeHeart.closest('.item-card-box');
            console.log(categoryCardDiv.childElementCount);
            for (let i = 0; i < categoryCardDiv.childElementCount; i++) {
                if (categoryCardDiv.children[i].querySelector('.card-img-top').src === itemRemoveCard.querySelector('.card-img-top').src) {
                    console.log('sometjing');
                    categoryCardDiv.children[i].querySelector('.add-to-fav').classList.add('fa-heart-o');
                    categoryCardDiv.children[i].querySelector('.add-to-fav').classList.remove('fa-heart');
                }
            }
            homeBoxs.forEach(function (homeBox) {
                if (homeBox.querySelector('.card-img-top').src === itemRemoveCard.querySelector('.card-img-top').src) {
                    console.log('sometjing');
                    homeBox.querySelector('.add-to-fav').classList.add('fa-heart-o');
                    homeBox.querySelector('.add-to-fav').classList.remove('fa-heart');
                }
            })
            removeFavItem(itemRemoveCard.querySelector('.card-img-top').src);
            itemRemoveCard.remove();
            removeFav();
        })
    })
}
const newFavItem = (checkFav, favHeart, itemFavCardPrice, itemFavCardName, itemFavCardImg) => {
    function checkClass(itemFavCardImg) {
        console.log(favCardDiv.childElementCount);
        console.log(favCardDiv.children[0]);
        for (let i = 0; i < favCardDiv.childElementCount; i++) {
            if (favCardDiv.children[i].querySelector('.card-img-top').src === itemFavCardImg) {
                console.log('sometjing');
                removeFavItem(favCardDiv.children[i].querySelector('.card-img-top').src);
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
        let favObject = {
            productImg: itemFavCardImg,
            productName: itemFavCardName,
            productPrice: itemFavCardPrice,
        }
        favArray.push(favObject);
    } else {
        favHeart.classList.add('fa-heart-o');
        favHeart.classList.remove('fa-heart');
        checkClass(itemFavCardImg);
    }
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
    newCartItem(itemPrice, itemImg, itemName, itemSpan);
})
favHearts.forEach(function (favHeart) {
    favHeart.addEventListener('click', function (event) {
        let checkFav = favHeart.classList.contains('fa-heart-o');
        let itemFavCard = favHeart.closest('.item-card-box');
        let itemFavCardName = itemFavCard.querySelector('.item-name').innerText;
        let itemFavCardPrice = itemFavCard.querySelector('.item-price').children[1].innerText;
        let itemFavCardImg = itemFavCard.querySelector('.card-img-top').src;
        console.log(favArray);
        newFavItem(checkFav, favHeart, itemFavCardPrice, itemFavCardName, itemFavCardImg);
        localStorage.setItem('favArrayItems', JSON.stringify(favArray));
        removeFav();
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
        if (btnCart.children[0].innerText === 'Add to cart') {
            console.log(cartArray);
            console.log('lah');
            newCartItem(itemPrice, itemImg, itemName, itemSpan);
            cartArray.push(cartObject);
            localStorage.setItem('cartArrayItems', JSON.stringify(cartArray));
            btnCart.children[0].innerText = 'Remove from cart'
        } else {
            console.log('lahlah');
            checkImg(itemImg)
            btnCart.children[0].innerText = 'Add to cart';
        }
        console.log(cartArray);
        removeCart();
        itemCount();
    })
})
const itemBoxContainers = document.querySelectorAll('.item-card-box');
function checkClass() {
    console.log(favCardDiv.childElementCount);
    for (let i = 0; i < favCardDiv.childElementCount; i++) {
        if (favCardDiv.children[i].querySelector('.card-img-top').src === itemFavCard.querySelector('.card-img-top').src) {
            favCardDiv.children[i].remove();
        }
    }
}
itemBoxContainers.forEach((itemBoxContainer) => {
    let favHrt = itemBoxContainer.querySelector('.add-to-fav');
    for (let i = 0; i < favCardDiv.childElementCount; i++) {
        if (favCardDiv.children[i].querySelector('.card-img-top').src === itemBoxContainer.querySelector('.card-img-top').src) {
            favHrt.classList.add('fa-heart');
            favHrt.classList.remove('fa-heart-o');
        }
    }
})
itemBoxContainers.forEach((itemBoxContainer) => {
    let btnCart = itemBoxContainer.querySelector('.btn-cart');
    if (btnCart !== null) {
        for (let i = 0; i < cartRowDiv.childElementCount; i++) {
            if (cartRowDiv.children[i].querySelector('.card-img').src === itemBoxContainer.querySelector('.card-img-top').src) {
                btnCart.children[0].innerText = 'Remove from cart';
            }
        }
    }
})
notificationLi.addEventListener('click', function (event) {
    notiSpan.style.display = 'none'
    if (notificationContain.style.display === 'block') {
        notificationContain.style.display = 'none'
    } else {
        notificationContain.style.display = 'block'
    }
})
document.addEventListener('click', function (event) {
    let isClickInside = notificationContain.contains(event.target);
    let isClickInsideLi = notificationLi.contains(event.target);
    // let paymentCardInside = paymentForm.querySelector('.card');
    // let isCardInside = paymentCardInside.contains(event.target);

    if (!isClickInside && !isClickInsideLi) {
        notificationContain.style.display = 'none'
    }
    // if (!isCardInside) {
    //     paymentForm.style.display = 'none'
    // }
});
const clearCartFunc = () => {
    localStorage.removeItem('cartArrayItems');
    while (cartRowDiv.firstChild) {
        cartRowDiv.removeChild(cartRowDiv.firstChild)
    }
    cartArray.splice(0);
    removeCart();
    itemCount();
    btnCarts.forEach(function (btnCart) {
        if (btnCart.children[0].innerText === 'Remove from cart') {
            btnCart.children[0].innerText = 'Add to cart'
        }
    })
}
clearBtn.addEventListener('click', function (event) {
    clearCartFunc();
})
clearFav.addEventListener('click', function (event) {
    localStorage.removeItem('favArrayItems');
    while (favCardDiv.firstChild) {
        favCardDiv.removeChild(favCardDiv.firstChild)
    }
    favHearts.forEach(function (favHeart) {
        favHeart.classList.add('fa-heart-o');
        favHeart.classList.remove('fa-heart');
    })
    favArray.splice(0);
    removeFav();
})
checkBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let deliveryOptionValue = deliveryOption.options[deliveryOption.selectedIndex].value;
    let deliveryLocationValue = deliveryLocation.options[deliveryLocation.selectedIndex].value;
    if (deliveryLocationValue === '1' && deliveryOptionValue === '1') {
        console.log('1');
    } else if (deliveryOptionValue === '1' && deliveryOptionValue !== '1') {
        console.log('2');
    } else if (deliveryOptionValue !== '1' && deliveryOptionValue === '1') {
        console.log('3');
    } else if (deliveryOptionValue !== '1' && deliveryOptionValue !== '1') {
        console.log('4');
        let sumX = sumItemPrice.innerText;
        if (deliveryOptionValue === '2') {
            sumTotalPrice.innerText = parseInt(sumX) + 2000;
        } else if (deliveryOptionValue === '3') {
            sumTotalPrice.innerText = parseInt(sumX) + 5000;
        }
        paymentForm.style.display = 'flex';
        const delayCard = () => {
            document.addEventListener('click', function (event) {
                let paymentCardInside = paymentForm.querySelector('.card');
                let isCardInside = paymentCardInside.contains(event.target);
                let isCheckBtn = checkBtn.contains(event.target);
                if (!isCardInside && !isCheckBtn) {
                    paymentForm.style.display = 'none'
                }
            });
        }
        setTimeout(delayCard, 1000)
    } else {
        console.log('5');
    }
})
cartForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let datePara = moment().format('Do MMMM, YYYY');
    let timePara = moment().format('h:mm a');

    const createNoti = `<div class="d-flex noti-card flex-column justify-content-between">
    <hr>
    <div class="d-flex flex-row justify-content-between">
        <p class="mb-1 noti-date">${datePara}</p>
        <p class="mb-1 noti-time">${timePara}</p>
    </div>
    <p class="mb-0 noti-txt">Your purchase was successful!</p>
    <p class="mb-0 noti-txt">Your goods will be delivered within 3 to 4 working days.</p>
</div>`
    document.querySelector('.new-noti-card').style.animation = `inOut 2s ease-in-out`;
    notificationContain.querySelector('.card-body').innerHTML += createNoti;

    notiSpan.style.display = 'flex';
    checkBtn.style.display = 'block';
    paymentTxt.style.display = 'none';
    proceedBtn.style.display = 'none';
    paymentForm.style.display = 'none';
    clearCartFunc();
    checkSectionId('home');
    checkSideNav('home-li');
    const removeInternal = () => {
        document.querySelector('.new-noti-card').style.animation = 'none';
    }
    setTimeout(removeInternal, 2000)
})
cardNo.addEventListener('keyup', function (event) {
    let checkCardNo = cardNo.value;
    if (checkCardNo.length !== 16) {
        cardNoError.innerText = 'invalid card no';
    } else {
        cardNo.blur();
        cardCvv.focus();
        cardNoError.innerText = '';
    }
})
cardCvv.addEventListener('keyup', function (event) {
    let checkCvv = cardCvv.value;
    if (checkCvv.length !== 3) {
        cvvError.innerText = 'invalid cvv no';
    } else {
        cardCvv.blur();
        cardDate.focus();
        cvvError.innerText = '';
    }
})
cardForm.addEventListener('submit', function (event) {
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

    if (checkCvv.length === 3 && checkCardNo.length === 16) {
        cardNoError.innerText = '';
        cvvError.innerText = '';
        paymentForm.style.display = 'none';
        checkBtn.style.display = 'none';
        paymentTxt.style.display = 'block';
        proceedBtn.style.display = 'block';
        cardCvv.value = '';
        cardNo.value = '';
    }

})
cancelPayBtn.addEventListener('click', function (event) {
    event.preventDefault();
    cardCvv.value = '';
    cardNo.value = '';
    cardNoError.innerText = '';
    cvvError.innerText = '';
    paymentForm.style.display = 'none';
})
cancelProceedBtn.addEventListener('click', function (event) {
    event.preventDefault();
    checkBtn.style.display = 'block';
    paymentTxt.style.display = 'none';
    proceedBtn.style.display = 'none';
    paymentForm.style.display = 'none';
})
removeCart();
removeFav();
itemCount();
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
                // case 'profile-li':
                //     checkSectionId('profile')
                //     checkSideNav('profile-li')
                //     removNav();
                //     console.log('profile');
                //     break;
                case 'home-li':
                    checkSectionId('home')
                    checkSideNav('home-li')
                    removNav();
                    break;
                // case 'about-li':
                //     checkSectionId('about')
                //     checkSideNav('about-li')
                //     sideNav.classList.remove('side-nav-show')
                //     break;
                case 'categories-li':
                    checkSectionId('categories')
                    checkSideNav('categories-li')
                    removNav();
                    break;
                case 'favorites-li':
                    checkSectionId('favorites')
                    checkSideNav('favorites-li')
                    removNav();
                    break;
                case 'cart-li':
                    checkSectionId('cart')
                    checkSideNav('cart-li')
                    removNav();
                    break;
                    
                    default:
                        // dpChild(event.target)
                        // checkSideNav(event.target)
                    // console.log('not working');
                    console.log(event.target.id);
                    console.log(event.target);

                    break;
            }
        })
    }
)
