(function() {
  let isHidden = true;

  function getChatListContainer() {
    const nav = document.querySelector('nav[class*="left-side"]');
    if (!nav) return null;
    const div = nav.querySelector('div.relative');
    if (!div) return null;
    return div.children[2]?.children[1]?.children[1] || null;
  }

  function hideHistoryPanel() {
    const container = getChatListContainer();
    if (!container) return;

    for (let i = 0; i < container.children.length; i++) {
      const child = container.children[i];
      if (!child.textContent?.includes('新对话')) {
        child.style.visibility = 'hidden';
        child.style.opacity = '0';
      }
    }
    isHidden = true;
  }

  function showHistoryPanel() {
    const container = getChatListContainer();
    if (!container) return;

    for (let i = 0; i < container.children.length; i++) {
      container.children[i].style.visibility = '';
      container.children[i].style.opacity = '';
    }
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

  setTimeout(() => {
    hideHistoryPanel();
  }, 500);

  setTimeout(() => hideHistoryPanel(), 1500);

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