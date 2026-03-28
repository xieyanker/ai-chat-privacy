(function() {
  let isHidden = true;

  function hideHistoryPanel() {
    const viewAllChatsButton = document.querySelector('[data-testid="view_all_chats_button"]');
    if (!viewAllChatsButton) return;
    
    const sectionItem = viewAllChatsButton.closest('[data-testid="sidebar-section-item"]');
    if (!sectionItem) return;
    
    const parent = sectionItem.parentElement;
    if (!parent) return;
    
    const siblings = parent.children;
    
    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i];
      const siblingText = sibling.textContent || '';
      
      const isNewChat = siblingText.includes('新对话');
      const isSettings = siblingText.includes('设置') || siblingText.includes('个人');
      const isViewAllButton = siblingText.trim() === '历史对话';
      
      if (!isNewChat && !isSettings && !isViewAllButton) {
        sibling.style.visibility = 'hidden';
        sibling.style.opacity = '0';
      }
    }
    isHidden = true;
  }

  function showHistoryPanel() {
    const viewAllChatsButton = document.querySelector('[data-testid="view_all_chats_button"]');
    if (!viewAllChatsButton) return;
    
    const sectionItem = viewAllChatsButton.closest('[data-testid="sidebar-section-item"]');
    if (!sectionItem) return;
    
    const parent = sectionItem.parentElement;
    if (!parent) return;
    
    const siblings = parent.children;
    
    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i];
      sibling.style.visibility = '';
      sibling.style.opacity = '';
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
