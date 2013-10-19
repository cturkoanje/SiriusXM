"use strict";

$(document).ready(function() {
    loaded();
});

var loaded = function() {
    var webView = $('#main-webview')
    console.log('trying? ' + webView + ' ' + webView.get(0));
    
    webView.attr('src', 'https://www.siriusxm.com/player/');

    
    console.log('Load Webview');
}
