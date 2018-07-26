/* Locate DOM elements */
let menuRight = document.querySelector('.nav-s2'),
    showRight = document.querySelector('.nav-trigger'),
    navContainer = document.querySelectorAll('.nav-li-container li'),
    body = document.body;

/* Show menu */
showRight.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    disableOther('showRight');
};

/* Hide menu */
let disableOther = (button) => {
    if (button !== 'showRight') {
        classie.toggle(showRight, 'disabled');
    }
}

/* Active menu link 
for (let i = 0; i < navContainer.length; i++) {
    navContainer[i].onclick = function () {
        classie.toggle(this, 'active');
    }
    classie.toggle(this, 'active');
}
*/

