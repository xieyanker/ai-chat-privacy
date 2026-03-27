function hideHistoryPanel() {
  const chatLinks = document.querySelectorAll('a[href*="/a/chat/s/"]');
  
  chatLinks.forEach(el => {
    el.style.display = 'none';
  });
}

function showHistoryPanel() {
  const allElements = document.querySelectorAll('a');
  allElements.forEach(el => {
    el.style.display = '';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key === 'H') {
    showHistoryPanel();
    setTimeout(() => hideHistoryPanel(), 5000);
  }
});

setTimeout(() => hideHistoryPanel(), 1500);
setTimeout(() => hideHistoryPanel(), 2500);

const observer = new MutationObserver(() => {
  hideHistoryPanel();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
