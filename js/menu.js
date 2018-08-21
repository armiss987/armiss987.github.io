$(document).ready(function(){
  $('.mob-ico').click(function(){  
    if($('.mob-menu__list').is(':visible') == true) {
        $('.mob-menu__list').css('display', 'none');
    }
    else{
        $('.mob-menu__list').css('display', 'block');
    }
  });
});