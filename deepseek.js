(function() {
  let isHidden = true;

  function hideHistoryPanel() {
    const chatLinks = document.querySelectorAll('a[href*="/a/chat/s/"]');
    
    chatLinks.forEach(el => {
      el.style.visibility = 'hidden';
      el.style.opacity = '0';
    });
    isHidden = true;
  }

  function showHistoryPanel() {
    const chatLinks = document.querySelectorAll('a[href*="/a/chat/s/"]');
    
    chatLinks.forEach(el => {
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

  setTimeout(() => hideHistoryPanel(), 1500);
  setTimeout(() => hideHistoryPanel(), 2500);

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