
// Create the main nav container
const navigation = () => {

    const nav = document.createElement('nav');

    nav.setAttribute('class', 'navbar navbar-expand-md');
    nav.setAttribute('id', 'navbar');

    // create the logo
    const brand = document.createElement('a');

    brand.setAttribute('class', 'navbar-brand');
    brand.setAttribute('id', 'logo');
    brand.innerHTML = 'BurgerLot';

    // create the toggler button
    const toggler = document.createElement('button');

    toggler.setAttribute('class', 'navbar-toggler');
    toggler.setAttribute('type', 'button');
    toggler.setAttribute('data-toggle', 'collapse');
    toggler.setAttribute('data-target', '#navbarNav');
    toggler.setAttribute('aria-controls', 'navbarNav');
    toggler.setAttribute('aria-expanded', 'false');
    toggler.setAttribute('aria-label', 'Toggle navigation');

    const togglerIconContainer = document.createElement('span');
    togglerIconContainer.setAttribute('class', 'navbar-toggler-icon');
    toggler.appendChild(togglerIconContainer);


    const togglerIcon = document.createElement('i');
    togglerIcon.setAttribute('class', 'fas fa-bars');
    togglerIcon.setAttribute('style', 'color: #fff; font-size: 28px;');
    togglerIconContainer.appendChild(togglerIcon);


    // create the navigation buttons

    const navItemContainer = document.createElement('div');
    navItemContainer.setAttribute('class', 'collapse navbar-collapse');
    navItemContainer.setAttribute('id', 'navbarNav');

    const navItemList = document.createElement('ul');
    navItemList.setAttribute('class', 'navbar-nav');
    navItemContainer.appendChild(navItemList);


    function createNavItem() {
        let navItem = document.createElement('li');
        navItem.setAttribute('class', 'nav-item');

        return navItem;
    }

    function createNavA(name) {
        let navA = document.createElement('a');
        navA.setAttribute('class', 'nav-link');
        navA.setAttribute('href', '#');
        let idName = name + 'Btn'
        navA.setAttribute('id', idName)
        navA.innerHTML = name;

        return navA;
    }

    // create social media links

    const socialList = document.createElement('ul');
    socialList.setAttribute('class', 'navbar-nav');

    const socialListItem = document.createElement('li');
    socialListItem.setAttribute('class', 'links');
    socialList.appendChild(socialListItem);

    const socialFacebookA = document.createElement('a');
    socialFacebookA.setAttribute('href', '#');
    const socialFacebookItem = document.createElement('i');
    socialFacebookItem.setAttribute('class', 'fab fa-facebook-square color-brown');
    socialFacebookA.appendChild(socialFacebookItem);
    socialListItem.appendChild(socialFacebookA);

    const socialInstagramA = document.createElement('a');
    socialInstagramA.setAttribute('href', '#');
    const socialInstagramItem = document.createElement('i');
    socialInstagramItem.setAttribute('class', 'fab fa-instagram color-brown');
    socialInstagramA.appendChild(socialInstagramItem);
    socialListItem.appendChild(socialInstagramA);

    // Append everything to navbar

    nav.appendChild(brand);
    nav.appendChild(toggler);

    let homeItem = createNavItem();
    let menuItem = createNavItem();
    let aboutItem = createNavItem();

    homeItem.appendChild(createNavA('home'));
    menuItem.appendChild(createNavA('menu'));
    aboutItem.appendChild(createNavA('about'));

    navItemList.appendChild(homeItem);
    navItemList.appendChild(menuItem);
    navItemList.appendChild(aboutItem);

    navItemContainer.appendChild(navItemList);
    navItemContainer.appendChild(socialList);

    nav.appendChild(navItemContainer);

    document.getElementById('content').appendChild(nav);
}

export { navigation };






