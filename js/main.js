/* sticky header */
if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener('scroll', function() {
    let h_header = document.querySelector('header').offsetHeight;
    let st = window.pageYOffset;
    if (st > h_header) {
      document.querySelector('header').classList.add("h-sticky");
    } else {
      document.querySelector('header').classList.remove("h-sticky");
    }
  });
}


function toggleCart(parent){
  parent.querySelector('.cart-preview').style.display = (parent.querySelector('.cart-preview').style.display == 'block') ? 'none' : 'block'
}

/* compare and favorite buttons state */
function toggleState(btn){
  btn.dataset.state = (btn.dataset.state == 'off') ? 'on' : 'off'
}

/* password button state change */
function change_state(btn) {
  if(btn.dataset.state == 'invisible'){
    btn.previousElementSibling.setAttribute('type', 'text');
    btn.dataset.state = 'visible';
  } else {
    btn.previousElementSibling.setAttribute('type', 'password');
    btn.dataset.state = 'invisible';
  }
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


/************  
SEARCH / FILTER 
*************/
let arr_search = Array.from(document.querySelectorAll('.search-in-list'));
arr_search.forEach(function(item, i, arr) {
    item.addEventListener('keyup', (event) => {
        listSearch(item);
    });
});
function listSearch(elem) {
    let phrase = elem.value.trim();
    let arr = elem.nextElementSibling.querySelectorAll('.search-item');
    let regPhrase = new RegExp(phrase, 'i');
    if(phrase.length == 0){
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('overlap');
            arr[i].classList.remove('diff');
        }
    } else {
        let flag = false;
        for (let i = 0; i < arr.length; i++) {
            flag = regPhrase.test(arr[i].innerHTML);
            if (flag) {
                arr[i].classList.add('overlap');
            } else {
                arr[i].classList.add('diff');
            }
        }
    }
}