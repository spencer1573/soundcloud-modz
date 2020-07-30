chrome.webNavigation.onBeforeNavigate.addListener(
  function ({ tabId }) {
    chrome.tabs.executeScript(tabId, {
      file: 'inject-before-nav.js',
    })
  },
  { url: [{ hostEquals: 'soundcloud.com' }] }
)

// this is the background code...

// listen for our browerAction to be clicked
// chrome.browserAction.onClicked.addListener(function (tab) {
chrome.webNavigation.onDOMContentLoaded.addListener(
  function ({ tabid }) {
    // for the current tab, inject the "inject.js" file & execute it
    chrome.tabs.executeScript(tabid, {
      file: 'inject.js',
    })
  },
  { url: [{ hostEquals: 'soundcloud.com' }] }
)

chrome.webNavigation.onCommitted.addListener(
  function ({ tabId }) {
    chrome.tabs.executeScript(tabId, {
      file: 'inject-before.js',
    })
  },
  { url: [{ hostEquals: 'soundcloud.com' }] }
)
