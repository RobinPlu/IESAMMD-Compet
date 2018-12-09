$(document).ready(function() {

$('#checkbox').click(function(event) {
    if($(this).is(":checked"))
    $('.nl-mobile').addClass('active');
    else
    $('.nl-mobile').removeClass('active');
});

var images = ['fond-1-min.jpg', 'fond-2-min.jpg', 'fond-3-min.jpg'];
$('.coverPage').css({'background-image': 'url(image/' + images[Math.floor(Math.random() * images.length)] + ')'});

    $(function(){
        $(".moreBox").slice(0, 3).show().addClass('moreBoxDisplay'); // select the first three
        $("#loadMore").click(function(e){ // click event for load more
            e.preventDefault();
            $(".moreBox:hidden").slice(0, 4).show().addClass('moreBoxDisplay').slideDown(); // select next 4 hidden divs and show them
            if($(".moreBox:hidden").length == 0){ // check if any hidden divs still exist
                $("#loadMore").addClass('loadMoreDisplay'); // alert if there are none left
            }
        });
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        /* the viewport is less than 768 pixels wide */
        $('#fullpage').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }

});