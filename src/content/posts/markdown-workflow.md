---
title: "Markdown 写作工作流"
summary: "后续写博客时，只需要新增 Markdown 文件；站点会自动生成文章页面和标签统计。"
pubDate: 2026-06-11
tags: ["Markdown", "博客", "工作流"]
---

这个博客的内容入口很窄：新增一篇 Markdown，就是新增一篇文章。文件名会成为文章 ID，例如 `markdown-workflow.md` 会生成 `/posts/markdown-workflow/`。

## 推荐流程

1. 在 `src/content/posts` 新建 Markdown。
2. 写好 frontmatter。
3. 运行本地开发服务器预览。
4. 提交并部署静态产物。

这种方式没有后台，也不需要数据库。写作、版本管理和部署都可以跟代码仓库放在一起。
