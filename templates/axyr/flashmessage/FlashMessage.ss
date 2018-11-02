<% if $Message %>
    <% if $IsModal %>
        <div id="FlashModal" class="reveal modal fade <% if $FadeOut %> autofade<% end_if %>" data-reveal tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close close-button" data-close data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        $Message
                    </div>
                </div>
            </div>
        </div>
    <% else %>
    <div data-alert role="alert"
         class="alert-box alert alert-$Type $Type<% if $FadeOut %> autofade<% end_if %><% if $Closable %> alert-dismissible<% end_if %>">
        <% if $Closable %>
            <button type="button" class="close close-button" data-close data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        <% end_if %>
        $Message
    </div>
    <% end_if %>
<% end_if %>
