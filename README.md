# fe-ecool-crawler

一个将 [前端面试题库](https://fe.ecool.fun/topic-list) 离线化保存的方案，基于
[Deno](https://deno.land/)

## 如何运行

1. 确保运行机器上有 Deno 环境。可以参考官方网站安装 Deno

将此项目 clone 到本地，然后执行

```powershell
deno run --allow-net=fe.ecool.fun --allow-write --allow-read .\index.ts
```

稍等一段时间，即可在 docs 目录下看到对应的离线网页

## Roadmap

- 添加原始链接和版权声明
- 优化文本解析
- 展现界面样式和交互调整

## 参考文章

[使用 Deno 进行网页抓取- Oleg Kulyk](https://scrapingant.com/blog/deno-web-scraping)
