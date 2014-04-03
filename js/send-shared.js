$(document).ready(function() {

    //Faqs
    $(".secondary .faqs p a").click(function(event){
        event.preventDefault();
        $(".list-faqs").slideDown("slow");
    });

    $("#footer .start .bt-close a").click(function(event){
        event.preventDefault();
        $(".list-faqs").slideUp("slow");
    });

});