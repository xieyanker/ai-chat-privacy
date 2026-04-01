(function () {
  let isHidden = true;

  function hideHistoryPanel() {
    const sidebar = document.querySelector('[role="list"]');
    if (!sidebar) return;

    const children = Array.from(sidebar.children);
    children.forEach(child => {
      const text = child.textContent || '';
      if (!text.includes('对话分组') && !text.includes('最近对话') && !text.includes('新对话') && !text.includes('设置')) {
        child.style.display = 'none';
        child.setAttribute('data-hidden-by-extension', 'true');
      }
    });

    const allDivs = sidebar.querySelectorAll('div');
    allDivs.forEach(div => {
      if (div.className && div.className.includes('group') && !div.textContent.includes('新对话')) {
        div.style.display = 'none';
      }
    });
    isHidden = true;
  }

  function showHistoryPanel() {
    const sidebar = document.querySelector('[role="list"]');
    if (!sidebar) return;

    const children = Array.from(sidebar.children);
    children.forEach(child => {
      child.style.display = '';
    });

    const allDivs = sidebar.querySelectorAll('div');
    allDivs.forEach(div => {
      div.style.display = '';
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
  setTimeout(() => hideHistoryPanel(), 2000);
  setTimeout(() => hideHistoryPanel(), 3000);

  const observer = new MutationObserver(() => {
    if (isHidden) {
      hideHistoryPanel();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });

  setInterval(() => {
    if (isHidden) {
      hideHistoryPanel();
    }
  }, 500);
})();