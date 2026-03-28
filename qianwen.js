(function() {
  let isHidden = true;

  function hideHistoryPanel() {
    const sidebar = document.querySelector('[role="list"]');
    if (!sidebar) return;
    
    const items = sidebar.querySelectorAll('div');
    items.forEach(el => {
      const text = el.textContent || '';
      if (!text.includes('对话分组') && !text.includes('最近对话') && !text.includes('新对话') && !text.includes('设置')) {
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
      }
    });
    isHidden = true;
  }

  function showHistoryPanel() {
    const sidebar = document.querySelector('[role="list"]');
    if (!sidebar) return;
    
    const items = sidebar.querySelectorAll('div');
    items.forEach(el => {
      el.style.visibility = '';
      el.style.opacity = '';
    });
    isHidden = false;
  }

  function toggleHistoryPanel() {
    if (isHidden) {
      showHistoryPanel();
    } else {
      hideHistoryPanel();
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === 'H') {
      toggleHistoryPanel();
    }
  });

  hideHistoryPanel();
  setTimeout(() => hideHistoryPanel(), 1000);

  const observer = new MutationObserver(() => {
    if (isHidden) {
      hideHistoryPanel();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();