chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == "install") {
    const defaultReviewTemplate = `Hi Team! {JIRA_HEADER}. Please review my pull request. Thank you! 🙏
{PR_LINK} | {JIRA_CARD}`;
    chrome.storage.sync.set({ reviewTemplate: defaultReviewTemplate });
  }
  else if (details.reason == "update") {
    chrome.action.setBadgeText({ text: 'NEW' });
  }
});