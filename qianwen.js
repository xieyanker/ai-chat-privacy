function hideHistoryPanel() {
  const sidebar = document.querySelector('[role="list"]');
  if (!sidebar) return;
  
  const items = sidebar.querySelectorAll('div');
  items.forEach(el => {
    const text = el.textContent || '';
    if (!text.includes('对话分组') && !text.includes('最近对话') && !text.includes('新对话') && !text.includes('设置') && text.length > 5) {
      el.style.display = 'none';
    }
  });
}

function showHistoryPanel() {
  const allDivs = document.querySelectorAll('div');
  allDivs.forEach(el => {
    el.style.display = '';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key === 'H') {
    showHistoryPanel();
    setTimeout(() => hideHistoryPanel(), 5000);
  }
});

hideHistoryPanel();
setTimeout(() => hideHistoryPanel(), 1000);

const observer = new MutationObserver(() => {
  hideHistoryPanel();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
