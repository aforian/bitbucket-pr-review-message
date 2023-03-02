const defaultReviewTemplate = `Hi Team! Please review my pull request. Thank you! 🙏
{PR_LINK} | {JIRA_CARD}`;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ reviewTemplate: defaultReviewTemplate });
});