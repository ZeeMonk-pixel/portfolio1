

var pagebody=document.querySelector(".page")
var menu=document.querySelector(".menu-container") 
var mobilelinks=document.querySelector(".mobilelinks-container")

function add(){
    menu.classList.toggle('showbutton')
    mobilelinks.classList.toggle('showmobilelink')
}


 const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    reset: true

 })
 sr.reveal('.text-content',{delay:350, origin:'left'})
 sr.reveal('.text-img', {delay:350, origin:'right'})
 sr.reveal('.col,.container,.contact-left,.contact-right,.contact-me,.button-two,.social,.btn3,.social2', {delay:350, origin:'bottom'})

       