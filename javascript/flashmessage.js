(function($) {

    // hide autofaded elements
    $(document).ready(function() {
        if (typeof foundation == 'function') {
            $(document).foundation();
        }
        fadeOutAutoFaders();
        if (typeof modal == 'function') {
            $('#FlashModal').modal('show');
        }else if (typeof foundation == 'function') {
            $('#FlashModal').foundation('open');
        }
    });

    // fire when any Ajax requests complete
    $(document).ajaxComplete(function() {
        fadeOutAutoFaders();
    });

    // Make ajax loaded alerts closable
    $(document).on("click", "div.alert-box a.close", function() {
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
                if (typeof modal == 'function') {
                    $('#FlashModal').modal('hide');
                }else if (foundation == 'function') {
                    $('#FlashModal').foundation('close');
                }
            },2000);
        }
    }

}(jQuery));
