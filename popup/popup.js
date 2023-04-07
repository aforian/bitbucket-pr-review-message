const $templateInput = document.querySelector('#review-template');
const $versionBlock = document.querySelector('#version');

$templateInput.addEventListener('input', (e) => {
  const { value } = e.currentTarget;

  chrome.storage.sync.set({ reviewTemplate: value });
});

async function fetchData() {
  const { reviewTemplate } = await chrome.storage.sync.get(['reviewTemplate']);
  const currentVersion = chrome.runtime.getManifest().version;

  $versionBlock.textContent = `v${currentVersion}`;
  $templateInput.value = reviewTemplate;
}

window.onload = () => {
  chrome.action.setBadgeText({ text: '' });

  fetchData();
}