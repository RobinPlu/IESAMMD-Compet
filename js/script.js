$(document).ready(function() {

$('#checkbox').click(function(event) {
    if($(this).is(":checked"))
    $('.nl-mobile').addClass('active');
    else
    $('.nl-mobile').removeClass('active');
});

var images = ['fond-1-min.jpg', 'fond-2-min.jpg', 'fond-3-min.jpg'];
$('.coverPage').css({'background-image': 'url(image/' + images[Math.floor(Math.random() * images.length)] + ')'});
});