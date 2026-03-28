(function() {
  let isHidden = true;

  function hideHistoryPanel() {
    const allDivs = document.querySelectorAll('div');
    
    allDivs.forEach(el => {
      const text = el.textContent?.trim() || '';
      
      const isNewChat = text === '新对话';
      const isSettings = text.includes('设置') || text.includes('个人') || text.includes('我的');
      const isSystem = text.includes('搜索') || text.includes('元宝') || text.includes('DeepSeek') || 
                       text.includes('Hi，我是') || text.includes('收藏') || text.includes('下载') ||
                       text.includes('前往') || text.includes('全部');
      
      const shouldHide = text.includes('聊天') || text.includes('分组') || text.includes('最近');
      
      if (!isNewChat && !isSettings && !isSystem && shouldHide && text.length > 1 && text.length < 50) {
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
      }
    });
    
    isHidden = true;
  }

  function showHistoryPanel() {
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(el => {
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

  setTimeout(() => {
    hideHistoryPanel();
  }, 5000);

  setTimeout(() => hideHistoryPanel(), 7000);

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