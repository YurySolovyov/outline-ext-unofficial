window.chrome.browserAction.onClicked.addListener(function(tab) {
  var url = 'https://outline.com/' + tab.url;
  chrome.tabs.update({ url: url });
});
