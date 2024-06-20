console.log(
  "This is the content script (onpage) context. Script is injected after DOM loads (document_idle by default)"
);
// Get or Do onpage things here.

const links = document.querySelectorAll("a");
let linkHrefs: Array<string> = []
links.forEach((link) => {
  linkHrefs.push(link.href)
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.thingToDo === "thing1") {
    // Do things with the request data or message sender here.

    sendResponse({
      // Send things back to popup context here.
      responseAction: "Onpage data going to Popup context",
    });
  }

  if (request.thingToDo === "getPageLinkHrefs") {
    // Do things with the request data or message sender here.
    sendResponse({
      // Send things back to popup context here.
      responseAction: linkHrefs,
    });
  }
});
