var link = document.querySelector('.start-block__button');
var link2 = document.querySelector('.article__button');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.modal__close');

link2.addEventListener('click' , function (){
    modal.classList.remove('modal-hide');
    overlay.classList.remove('overlay-hide');
});



link.addEventListener('click' , function(){
    modal.classList.remove('modal-hide');
    overlay.classList.remove('overlay-hide');
});

close.addEventListener('click' , function(){
    modal.classList.add('modal-hide');
    overlay.classList.add('overlay-hide');
});

document.onkeydown = function (e) {
	if (e.keyCode == 27) {
        overlay.classList.add("overlay-hide");
		modal.classList.add("modal-hide");
	}
}