// load homepage
$(document).ready(function(){
    $(window).on('load scroll',function(){
        $('.nav').removeClass('nav-toggle');
        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#009e60','box-shadow':'0 .2rem .2rem rgba(0,0,0,.4) '});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });
   
    $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
         $('.back-to-top').fadeIn('slow');
     } else {
         $('.back-to-top').fadeOut('slow');
     }
   });
   $('.back-to-top').click(function (e) {
     e.preventDeault()
     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
     return false;
   });
   
   });
   
   
   //About
      
    document.addEventListener('DOMContentLoaded',function(){
   var items = document.querySelector('items')
   var menu_items = document.getElementsByClassName('.navbar')[0]
   
   for( var i = 0; items.length; i++){
     items[i].addEventListener('click', function(){
       this.classList.toggle('active')
       menu_items.classList.toggle('active')
     })
   }
   
    });
   
//Menu Show

    //responsive menu toggle
     


    /*$(document).ready(function(){
     $(".btnMenu").click(function() {
       $('.navbar').toggleClass("showing");
     })
    })
     function myFunction(x){
       x.classList.toggle("close");
       
     }
     */
    /*btnMenu.addEventListener.classList('click',toggleMenu)
     const btnMenu = document.querySelectorAll('.btnMenu')
     const navbar = document.querySelectorAll('.navbar')
     const menu_nav = document.querySelectorAll('.mobile-nav')
     const menu_items = document.querySelectorAll('.menu-items')
     const nav_items = document.querySelectorAll('.nav-item')
     
   function toggleMenu(){
   
     if(!showing){
       btnMenu.classList.add('.close')
       navbar.classList.add('showing')
       menu_nav.classList.add('showing')
       menu_items.classList.add('showing')
       s.forEach(item.classList.add('showing'))
       showMenu =true;
     } else
     btnMenu.classList.remove('close')
     navbar.classList.remove('showing')
     menu_items.classList.remove('showing')
     menu_nav.classList.remove('showing')
     nav_items.forEach(item.classList.remove('showing'))
   
     showMenu =false
     
   }*/