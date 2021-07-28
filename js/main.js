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


function toggleCart(parent){
  // parent.querySelector('.cart-preview').style.display = 'block';
  parent.querySelector('.cart-preview').style.display = (parent.querySelector('.cart-preview').style.display == 'block') ? 'none' : 'block'
}


// function showInd(ind){
//   console.log(1);
//   let parent = ind.closest('radio-group');
//   let arr_inputs = Array.from(parent.querySelectorAll('.radio'));
//   let count = arr_inputs.length;
//   ind.style.width = 100/count + "%";
// }

document.addEventListener('DOMContentLoaded', function() {
  let radioGroups = Array.from(document.querySelectorAll('.radio-group'));
  radioGroups.forEach(function(item, i, arr) {
    let ind = item.querySelector('.indicator');
    let arr_inputs = Array.from(item.querySelectorAll('.radio'));
    ind.style.width = 100/arr_inputs.length + '%';
    console.log(100/arr_inputs.length + '%');
    moveInd(item);
  });
}, false);

// window.onload = function() {
//   let radioGroups = Array.from(document.querySelectorAll('.radio-group'));
//   radioGroups.forEach(function(item, i, arr) {
//     let ind = item.querySelector('.indicator');
//     let arr_inputs = Array.from(item.querySelectorAll('.radio'));
//     ind.style.width = 100/arr_inputs.length + '%';
//     console.log(100/arr_inputs.length + '%');
//     moveInd(item);
//   });
// }

function moveInd(group){
  let ind = group.querySelector('.indicator');
  console.log('ind = '+ind);
  let arr_inputs = Array.from(group.querySelectorAll('.radio input'));
  let cur_inp_index;
  for(let i = 0; i < arr_inputs.length; i++){
    if(arr_inputs[i].checked){
      cur_inp_index = i;
    }
  }
  console.log('cur_inp_index = '+cur_inp_index);
  let shift = cur_inp_index*100 + '%';
  console.log('shift = '+shift);
  ind.style.transform = 'translateX('+shift+')';
}