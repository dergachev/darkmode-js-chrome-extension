

// alert("HI");
// console.log("Alex was here main.js");

    chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.executeScript(null,{file:"popup.js"});
    });

/*
    // Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });
  */
