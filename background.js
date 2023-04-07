const defaultReviewTemplate = `Hi Team! {JIRA_HEADER}. Please review my pull request. Thank you! 🙏
{PR_LINK} | {JIRA_CARD}`;

chrome.runtime.onInstalled.addListener(async () => {
  const { reviewTemplate } = await chrome.storage.sync.get(['reviewTemplate']);

  if (!reviewTemplate) {
    chrome.storage.sync.set({ reviewTemplate: defaultReviewTemplate });
  }
});