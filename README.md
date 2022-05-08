# ecool-interview-offline

一个将 [前端面试题库](https://fe.ecool.fun/topic-list) 离线化保存的方案，基于
[Deno](https://deno.land/) 【中文网站 [在这里](https://www.denojs.cn/)】

## 如何运行

1. 确保运行机器上有 Deno 环境。可以参考官方网站安装 Deno

将此项目 clone 到本地，然后执行

```powershell
deno run --allow-net=fe.ecool.fun --allow-write --allow-read .\index.ts
```

稍等一段时间，即可在 dist 目录下看到对应的离线网页

## 参考文章

[使用 Deno 进行网页抓取- Oleg Kulyk](https://scrapingant.com/blog/deno-web-scraping)
