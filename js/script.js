$(document).ready(function() {

$('#checkbox').click(function(event) {
    if($(this).is(":checked"))
    $('.nl-mobile').addClass('active');
    else
    $('.nl-mobile').removeClass('active');
});

});