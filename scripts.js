// BOTAO
window.onload = function(){up()};
function up(){
    
    window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    
    if (document.documentElement.scrollTop > 90) {
        backToTopBtn.style.display = "block";

    } else {
        backToTopBtn.style.display = "none";
    }
}

}
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// MOBILE NAVBAR

class MobileNavbar {
    constructor(menu, navList, navLinks) {
      this.mobileMenu = document.querySelector(menu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
''
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards $
          {index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();



  // NAVBAR


  let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*='+ id +']').classList.add
                ('active');
            })
        } 
    })
}


// TEXT ANIMATION


document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animado", {
        speed: 150, 

        loop: true
    })
    .type('Front-End', {delay: 900})
    .delete(9)
    .type('back-End', {delay: 900})
    .delete(8)
    .type('em JavaScript', {delay: 900})
    .delete(13)
    .type('em PHP', {delay: 900})
    .delete(6)
    .type('em Java', {delay: 900})
    .delete(7)
    .type('em MySQL', {delay: 900})
    .delete(8)
    
    
    .go()
})