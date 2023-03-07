const defaultReviewTemplate = `Hi Team! Change for {PR_HEADER}. Please review my pull request. Thank you! 🙏
{PR_LINK} | {JIRA_CARD}`;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ reviewTemplate: defaultReviewTemplate });
});