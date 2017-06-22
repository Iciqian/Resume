var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        keyboardControl: true,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

$('#container').fullpage({
				anchors: ['anchor1','anchor2','anchor3','anchor4','anchor5','anchor6'],
				menu: '#menu',
				afterLoad: function(anchorLink, index){
					if (index == 1) {
						$('#menu').fadeOut();
					}else{
						$('#menu').fadeIn();
					}
					
				}
			})