"use strict";

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('../html/window.html', {
      'id': 'main-view',
    'width': 1015,
    'height': 600,
    'minWidth': 1015,
    'minHeight': 600
  });
});
