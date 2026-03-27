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
      sibling.style.display = 'none';
    }
  }
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
    sibling.style.display = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key === 'H') {
    const viewAllChatsButton = document.querySelector('[data-testid="view_all_chats_button"]');
    if (viewAllChatsButton) {
      showHistoryPanel();
      setTimeout(() => hideHistoryPanel(), 5000);
    }
  }
});

setTimeout(() => {
  hideHistoryPanel();
}, 500);

setTimeout(() => hideHistoryPanel(), 1500);

const observer = new MutationObserver(() => {
  hideHistoryPanel();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
