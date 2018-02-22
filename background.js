var PATTERN = 'https://www.google.com.ua/search?q=site:{URL}';

function handleClick(info, tab) {
  if ('linkUrl' in info) {
    chrome.tabs.create({
      url: PATTERN.replace('{URL}', info.linkUrl)
    }, function(tab) {
      console.log('Tab', JSON.stringify(tab));
    });
  }
}

chrome.contextMenus.create({
  title: "Meow!",
  contexts: ["link"],
  onclick: handleClick,
});
