// VARIABLES
const pageLinksList = document.querySelectorAll('a');
const sideBarClose = document.querySelector('#side-bar-close');
const sideBarOverlay = document.querySelector('#side-bar-overlay');
const sideBar = document.querySelector('.side-bar');
const menuIcon = document.querySelector('.menu-icon');


// disable links action
for (let i = 0; i < pageLinksList.length; i++)
    pageLinksList[i].addEventListener('click', (e) => {
        e.preventDefault();
    })


// SideBar Close Action
//Close
sideBarClose.addEventListener('click', closeSideBar);
// Open
menuIcon.addEventListener('click', openSideBar);

function closeSideBar() {
    sideBar.style.cssText = `left:-100%`
    sideBarOverlay.style.cssText = 'display:none;'
}
function openSideBar() {
    sideBar.style.cssText = 'left:0;'
    sideBarOverlay.style.cssText = 'display:block;'

}
