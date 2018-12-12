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
    //* Debut js pages questionnaires + rejoindre + contact + CGU + CGL + FAQ */

// Page Questionnaires

    $(function(){
        $('button', '.formulaire-design').on("click", function (e) {
            e.preventDefault() && e.stopPropagation();
            var currentBlock = $(this).closest('.question-block');
            currentBlock.removeClass('active');
            currentBlock.next().addClass('active');
        });
    });

// Page rejoindre
    $(function(){
        $('button', '.formulaire-rejoindre-design').on("click", function (e) {
            e.preventDefault() && e.stopPropagation();
            var currentBlock = $(this).closest('.question-block2');
            currentBlock.removeClass('active');
            currentBlock.next().addClass('active');
        });
    });

// Page Contact
    jQuery.extend(jQuery.validator.messages, {
        required: "Champ requis.",
        email: "Format mail invalide",
    });
    $("#contactForm").validate();

// FAQ

    $('#icone-triangle-question1').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question1');
        $(this).toggleClass('icone-triangle-FAQ-question1-reponse-afficher');
    });
    $("#icone-triangle-question1").click(function(){
        $(".div-FAQ-reponse-question1").toggle("slow");
    });
    $('#icone-triangle-question2').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question2');
        $(this).toggleClass('icone-triangle-FAQ-question2-reponse-afficher');
    });
    $("#icone-triangle-question2").click(function(){
        $(".div-FAQ-reponse-question2").toggle("slow");
    });
    $('#icone-triangle-question3').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question3');
        $(this).toggleClass('icone-triangle-FAQ-question3-reponse-afficher');
    });
    $("#icone-triangle-question3").click(function(){
        $(".div-FAQ-reponse-question3").toggle("slow");
    });
    $('#icone-triangle-question4').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question4');
        $(this).toggleClass('icone-triangle-FAQ-question4-reponse-afficher');
    });
    $("#icone-triangle-question4").click(function(){
        $(".div-FAQ-reponse-question4").toggle("slow");
    });
    $('#icone-triangle-question5').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question5');
        $(this).toggleClass('icone-triangle-FAQ-question5-reponse-afficher');
    });
    $("#icone-triangle-question5").click(function(){
        $(".div-FAQ-reponse-question5").toggle("slow");
    });
    $('#icone-triangle-question6').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question6');
        $(this).toggleClass('icone-triangle-FAQ-question6-reponse-afficher');
    });
    $("#icone-triangle-question6").click(function(){
        $(".div-FAQ-reponse-question6").toggle("slow");
    });
    $('#icone-triangle-question7').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question7');
        $(this).toggleClass('icone-triangle-FAQ-question7-reponse-afficher');
    });
    $("#icone-triangle-question7").click(function(){
        $(".div-FAQ-reponse-question7").toggle("slow");
    });
    $('#icone-triangle-question8').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question8');
        $(this).toggleClass('icone-triangle-FAQ-question8-reponse-afficher');
    });
    $("#icone-triangle-question8").click(function(){
        $(".div-FAQ-reponse-question8").toggle("slow");
    });
    $('#icone-triangle-question9').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question9');
        $(this).toggleClass('icone-triangle-FAQ-question9-reponse-afficher');
    });
    $("#icone-triangle-question9").click(function(){
        $(".div-FAQ-reponse-question9").toggle("slow");
    });
    $('#icone-triangle-question10').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question10');
        $(this).toggleClass('icone-triangle-FAQ-question10-reponse-afficher');
    });
    $("#icone-triangle-question10").click(function(){
        $(".div-FAQ-reponse-question10").toggle("slow");
    });
    $('#icone-triangle-question11').click(function() {
        $(this).toggleClass('icone-triangle-FAQ-question11');
        $(this).toggleClass('icone-triangle-FAQ-question11-reponse-afficher');
    });
    $("#icone-triangle-question11").click(function(){
        $(".div-FAQ-reponse-question11").toggle("slow");
    });
//* fin js pages questionnaires + rejoindre + contact + CGU + CGL + FAQ */

});