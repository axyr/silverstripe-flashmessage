(function($) {

    // hide autofaded elements
    $(document).ready(function() {
        fadeOutAutoFaders();
    });

    // fire when any Ajax requests complete
    $(document).ajaxComplete(function() {
        fadeOutAutoFaders();
    });

    // Make ajax loaded alerts closable
    $(document).on("click", "div.alert-box a.close", function( event ) {
        $(this).parent('.alert-box').fadeOut();
        return false;
    });

    function fadeOutAutoFaders() {
        var autoFaders = $('body div.autofade');
        if($(autoFaders).length) {
            setTimeout(function() {
                $.each(autoFaders, function(key, elem) {
                    $(elem).slideUp(1000);
                });
            },2000);
        }
    }

}(jQuery));
