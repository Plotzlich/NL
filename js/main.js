$(document).ready(function () {
    $('a.main-item').click(function (e) {
        $(this).toggleClass('active');
            $('.nav-mini').toggle();
        });

    $('.close').click(function(){
    	$('.nav-mini').hide();
    })
});