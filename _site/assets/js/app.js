$(document).foundation();

$('body').removeClass('fade-out');

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});