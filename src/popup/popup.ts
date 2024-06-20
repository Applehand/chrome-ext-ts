document.addEventListener("DOMContentLoaded", () => {
  console.log("This is the popup context.");

  const sendMessageToContentScriptButtonEl = document.getElementById(
    "send-to-content-script-button"
  ) as HTMLButtonElement;
  sendMessageToContentScriptButtonEl.onclick = sendMessageToActiveTab;

  const getPageTitleButtonEl = document.getElementById(
    "get-page-title-button"
  ) as HTMLButtonElement;
  getPageTitleButtonEl.onclick = getActiveTabPageTitle;

  const getPageLinkHrefsButton = document.getElementById(
    "get-onpage-link-hrefs"
  ) as HTMLButtonElement;
  getPageLinkHrefsButton.onclick = getPageLinkHrefs;

  async function getActiveTab() {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    return tab;
  }

  async function sendMessageToActiveTab() {
    const tab = await getActiveTab();
    const response = await chrome.tabs.sendMessage(tab.id || 0, {
      // Send something to the onpage script here
      thingToDo: "thing1",
    });
    // Do something with response here
    console.log("Response from page: ", response.responseAction);
  }

  async function getActiveTabPageTitle() {
    const tab = await getActiveTab();
    getPageTitleButtonEl.innerHTML = tab.title as string;
  }

  async function getPageLinkHrefs() {
    const tab = await getActiveTab();
    const response = await chrome.tabs.sendMessage(tab.id || 0, {
      thingToDo: "getPageLinkHrefs",
    });
    const linkHrefs = response.responseAction;
    let unorderedListEl = document.createElement("ul");
    linkHrefs.forEach((href: string) => {
      const listEl = document.createElement("li");
      listEl.innerHTML = href;
      unorderedListEl.appendChild(listEl);
    });
    document.body.appendChild(unorderedListEl);
  }
});
