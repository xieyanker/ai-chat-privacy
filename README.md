# AI Chat Privacy

一个Chrome扩展程序，用于隐藏主流AI聊天网站的历史查询记录，保护用户隐私。

## 支持的网站

- [x] 豆包 (doubao.com)
- [x] 千问 (qianwen.com)
- [x] DeepSeek (chat.deepseek.com)

## 功能特点

- 所有网站使用同一个插件
- 只隐藏历史对话列表
- 保留"新对话"等必要按钮
- 支持快捷键临时显示历史记录
- 轻量级，无隐私收集

## 安装方法

1. 打开Chrome浏览器，访问 `chrome://extensions/`
2. 开启右上角的「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择 `ai-chat-privacy` 文件夹

## 临时显示历史记录

按 `Shift + H` 可临时显示历史记录，5秒后自动重新隐藏。

## 项目结构

```
ai-chat-privacy/
├── manifest.json    # 统一配置文件
├── doubao.js        # 豆包
├── qianwen.js       # 千问
├── deepseek.js      # DeepSeek
└── README.md
```

## License

MIT
