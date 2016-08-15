/*$(function(){
  m = document.querySelectorAll(".point");
  $('.point').on('mouseenter', function(){
    var block = $(this).data('block');
    $('.' + block).addClass('point-tooltip--current');
    $(m).addClass('point--hide');
    $(this).removeClass('point--hide');
    $(this).addClass('point--active');
  });
  $('.point').on('mouseleave', function(){
    $('.point-tooltip__title').removeClass('point-tooltip--current');
    $(m).removeClass('point--hide');
    $(this).removeClass('point--active');
  });
});
*/
m = document.querySelectorAll(".point");
$('.point').hover(
 function(){
   var block = $(this).data('block');
   $('.' + block).addClass('point-tooltip--current');
   $(m).addClass('point--hide');
   $(this).removeClass('point--hide');
   $(this).addClass('point--active');
 },
 function(){
   $('.point-tooltip__title').removeClass('point-tooltip--current');
   $(m).removeClass('point--hide');
   $(this).removeClass('point--active');
});

$(function(){
  $('.point').on('click', function(){
    var pos = $(this).data('block');
    $('#' + pos).addClass('bg__el--active bg__el--z');
    $('.wc').addClass('point--hide');
    parallax.disable();//$('#scene').parallax('disable');
  });
  $('.bg__close').on('click', function(){
    $('.background__el').removeClass('bg__el--active');
    setTimeout(function(){
      $('.background__el').removeClass('bg__el--z');
      $('.wc').removeClass('point--hide');
    }, 700);//$('.background__el').removeClass('bg__el--z').delay(4000);

    parallax.enable();//$('#scene').parallax('enable');
  });
});
/*
$(function(){
  m = document.querySelectorAll(".point");
  $('.point').on('mouseenter', function(){
    $(m).addClass('point--hide');
    $(this).removeClass('point--hide');
    $(this).addClass('point--active');
  });
  $('.point').on('mouseleave', function(){
    $(m).removeClass('point--hide');
    $(this).removeClass('point--active');
  });
});

m = document.querySelectorAll(".point");
// функция добавляет класс массиву элементов
function addClassToArrayOfElements(array, className) {
     array.forEach(function(item){
           item.classList.add(className);
     });
}
// функция удаляет класс массиву элементов
function removeClassFromElements(array, className) {
     array.forEach(function(item){
           item.classList.remove(className);
     });
}

m.forEach(function(item, i, array) {
     // аттачим событие на mouse move
      item.onmousemove = function() {
           addClassToArrayOfElements(array, "point--hide");
           this.classList.remove("point--hide");
					 this.classList.add("point--active");
     }
     // аттачим событие на mouse leave
     item.onmouseleave = function() {
          removeClassFromElements(array, "point--hide");
					this.classList.remove("point--active");
     }
});
*/
