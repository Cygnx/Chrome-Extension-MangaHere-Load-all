// https://developer.chrome.com/extensions/tabs#method-executeScript
// Injects the inject.js file into the current page
function loadChapter () {
  chrome.tabs.executeScript(null, { file: "jquery-2.1.3.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "inject.js" });
});
}

// When the browser action is clicked, call the
// getBgColors function.
chrome.browserAction.onClicked.addListener(loadChapter);