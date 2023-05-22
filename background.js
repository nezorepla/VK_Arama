// Sağ tıklama menüsüne özel işlevi ekle
chrome.contextMenus.create({
  id: "vkSearch",
  title: "VK'da Ara",
  contexts: ["selection"]    ,
  documentUrlPatterns: ["*://*/*"]

});
 //    var searchUrl = 'https://www.google.com/search?q=' + searchString;
// Sağ tıklama menüsü işlevi gerçekleştirildiğinde tetiklenir
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "vkSearch") {
    var selectedText = info.selectionText.trim();
    var searchString = selectedText + ' site:vk.com/video';
  var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchString);
  chrome.tabs.create({ url: searchUrl });
  //window.open(searchUrl, '_blank');
  }
});
