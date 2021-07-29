/* sticky header */
window.addEventListener('scroll', function() {
  let h_header = document.querySelector('header').offsetHeight;
  let st = window.pageYOffset;
  if (st > h_header) {
    document.querySelector('header').classList.add("h-sticky");
  } else {
    document.querySelector('header').classList.remove("h-sticky");
  }
});


function toggleCart(parent){
  parent.querySelector('.cart-preview').style.display = (parent.querySelector('.cart-preview').style.display == 'block') ? 'none' : 'block'
}

/* compare and favorite buttons state */
function toggleState(btn){
  btn.dataset.state = (btn.dataset.state == 'off') ? 'on' : 'off'
}


/* switch buttons */
window.onload = function() {
  let switchDivs = Array.from(document.querySelectorAll('.switch'));
  switchDivs.forEach(function(item, i, arr) {
    let ind = item.querySelector('.indicator');
    let arr_options = Array.from(item.querySelectorAll('.switch-option'));
    let cur_opt_index;
    for(let i = 0; i < arr_options.length; i++){
      if(arr_options[i].classList.contains('active')){
        cur_opt_index = i;
        ind.style.width = 100/arr_options.length + '%';
        ind.style.transform = moveInd(cur_opt_index);
      }
    }
  });
}
function switchTo(btn){
  let parent = btn.parentElement;
  let ind = parent.querySelector('.indicator');
  let arr_options = Array.from(parent.querySelectorAll('.switch-option'));
  for(let i = 0; i < arr_options.length; i++){
    arr_options[i].classList.remove('active');
    if(btn == arr_options[i]){
      btn.classList.add('active');
      ind.style.transform = moveInd(i);
    }
  }
}
function moveInd(index){
  let shift = 'translateX('+index*100 +'%)';
  return shift;
}