const $templateInput = document.querySelector('#review-template');

$templateInput.addEventListener('input', (e) => {
  const { value } = e.currentTarget;

  chrome.storage.sync.set({ reviewTemplate: value });
});

async function fetchData() {
  let { reviewTemplate } = await chrome.storage.sync.get(['reviewTemplate']);

  $templateInput.value = reviewTemplate;
}

window.onload = () => {
  fetchData();
}