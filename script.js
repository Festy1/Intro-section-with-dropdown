const menu = document.getElementById('menu');
const closeMenu = document.querySelector('.menu-main');
///
const arrowDown1 = document.getElementById('arrow-down1')
const arrowUp1 = document.getElementById('arrow-up1')
const featureLi = document.querySelector('.feature-li')
///
const arrowDown2 = document.getElementById('arrow-down2')
const arrowUp2 = document.getElementById('arrow-up2')
const companyLi = document.querySelector('.company-li')
///
const showMenu = () => {
    menu.style.display = 'none';
    closeMenu.style.display = 'block';
};
menu.addEventListener('click',showMenu);

const close = document.getElementById('close');
const hideMenu = () => {
    menu.style.display = 'block';
    closeMenu.style.display = 'none';
    //this closes the list that has been open immediately you close the menu
    arrowDown1.style.display = 'inline-block';
    arrowUp1.style.display = 'none';
    featureLi.style.display = 'none';
    arrowDown2.style.display = 'inline-block';
    arrowUp2.style.display = 'none';
    companyLi.style.display = 'none';
};
close.addEventListener('click', hideMenu);
//////arrow1////

const showArrow = () => {
    arrowDown1.style.display = 'none';
    arrowUp1.style.display = 'inline-block';
    featureLi.style.display = 'block';
};
arrowDown1.addEventListener('click', showArrow);
const hideArrow = () => {
    arrowDown1.style.display = 'inline-block';
    arrowUp1.style.display = 'none';
    featureLi.style.display = 'none';
};
arrowUp1.addEventListener('click', hideArrow);
//////arrow2////

const showArrow2 = () => {
    arrowDown2.style.display = 'none';
    arrowUp2.style.display = 'inline-block';
    companyLi.style.display = 'block';
};
arrowDown2.addEventListener('click', showArrow2);
const hideArrow2 = () => {
    arrowDown2.style.display = 'inline-block';
    arrowUp2.style.display = 'none';
    companyLi.style.display = 'none';
};
arrowUp2.addEventListener('click', hideArrow2);



//// For Desktop ////////

////featuers//////
const desktopArrowDown = document.getElementById('desktop-arrow-down1');
const featuresLi = document.querySelector('.desktop-feature-li');

const showFeatures = () => {
    featuresLi.style.display = 'block';
    document.getElementById('desktop-arrow-down1').style.display = 'none';
    document.getElementById('desktop-arrow-up1').style.display = 'inline-block';
};
desktopArrowDown.addEventListener('click', showFeatures);


 const desktopArrowUp1 = document.getElementById('desktop-arrow-up1');
 const hideFeatures = () => {
    featuresLi.style.display = 'none';
    desktopArrowDown.style.display = 'inline-block';
     desktopArrowUp1.style.display = 'none';
  };
 desktopArrowUp1.addEventListener('click', hideFeatures);

 /////company/////
  const desktopArrowDown2 = document.getElementById('desktop-arrow-down2');
const desktopCompanyLi = document.querySelector('.desktop-company-li');
const desktopArrowUp2 = document.getElementById('desktop-arrow-up2');

const showCompany = () => {
    desktopCompanyLi.style.display = 'block';
    document.getElementById('desktop-arrow-down2').style.display = 'none';
    desktopArrowUp2.style.display = 'inline-block';
};
desktopArrowDown2.addEventListener('click', showCompany);


const hideCompany = () => {
    desktopCompanyLi.style.display = 'none';
    desktopArrowDown2.style.display = 'inline-block';
    desktopArrowUp2.style.display = 'none';
 };
desktopArrowUp2.addEventListener('click', hideCompany);




