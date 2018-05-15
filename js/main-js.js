// JavaScript Document
function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

 var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
	  autoplay: {
        delay: 2500,
		speed:10000,
		loop:true,
        disableOnInteraction: false,
      },
    });

$(".isidropdown").hide();
$( ".userdrop" ).click(function() {
$( ".isidropdown" ).toggle( "fast", function() {
    // Animation complete.
  });
});	