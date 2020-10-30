
const sideNavItems = notificationLi = document.querySelector('.notification-li'),
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
clearFav = document.querySelector('.clear-fav');

function itemCount() {
noItems.forEach(function (noItem) {
    noItem.innerText = cartRowDiv.childElementCount;
})
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
