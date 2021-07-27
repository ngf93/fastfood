/* фиксированная шапка */
window.addEventListener('scroll', function() {
  let h_header = document.querySelector('header').offsetHeight;
  let st = window.pageYOffset;
  if (st > h_header) {
    document.querySelector('header').classList.add("h-sticky");
  } else {
    document.querySelector('header').classList.remove("h-sticky");
  }
});

$(function() {
  $(".toggle-cart").mouseenter(function() {
    $('.cart-preview').show();
  });
  $(".toggle-cart").mouseleave(function() {
    $('.cart-preview').hide();
  });
});

function toggleCart(parent){
  // parent.querySelector('.cart-preview').style.display = 'block';
  parent.querySelector('.cart-preview').style.display = (parent.querySelector('.cart-preview').style.display == 'block') ? 'none' : 'block'
}