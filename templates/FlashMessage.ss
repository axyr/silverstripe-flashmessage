<% if $Message %>
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
