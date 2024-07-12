// The service worker is ideal for background tasks that need to be persistent, event-driven, or asynchronous
chrome.tabs.onActivated.addListener(() => {
  // This prints in the Service Worker console.
  console.log("Active tab has changed.");
});
