let navbar=document.querySelector('.header .navbar')

document.querySelector('#menu-button').onclick=()=>{
    navbar.classList.add('active');
}
document.querySelector('#close-navbar').onclick=()=>{
    navbar.classList.remove('active');
};
let landingPage=document.querySelector(".home");
let imgarr=["cover.jpg","slide1.jpg","slide2.jpg","slide3.jpg"];
landingPage.style.backgroundImage='url(Images/slide2.jpg)';
setInterval(()=>{
    let ran=Math.floor(Math.random() * imgarr.length);
    landingPage.style.backgroundImage='url("Images/'+imgarr[ran]+ '")';
},2000);