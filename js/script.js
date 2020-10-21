
const sideNavItems = document.querySelectorAll('.side-nav-list-item'),
    home = document.querySelector('#home'),
    about = document.querySelector('#about'),
    categories = document.querySelector('#categories'),
    favorites = document.querySelector('#favorites'),
    cart = document.querySelector('#cart'),
    notifications = document.querySelector('#notifications'),
    settings = document.querySelector('#settings');

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
                    notifications.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'about-li':
                    home.style.display = 'none'
                    about.style.display = 'block'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    notifications.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'categories-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'block'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    notifications.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'favorites-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'block'
                    cart.style.display = 'none'
                    notifications.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'cart-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'block'
                    notifications.style.display = 'none'
                    settings.style.display = 'none'
                    break;
                case 'notifications-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    notifications.style.display = 'block'
                    settings.style.display = 'none'
                    break;
                case 'settings-li':
                    home.style.display = 'none'
                    about.style.display = 'none'
                    categories.style.display = 'none'
                    favorites.style.display = 'none'
                    cart.style.display = 'none'
                    notifications.style.display = 'none'
                    settings.style.display = 'block'
                    break;

                default:
                    break;
            }
        })
    }
)

function itemType(type, elementName) {
    elName = elementName.classList.contains(type);
    if (elName) {
        type.style.display = 'block';
    }
}