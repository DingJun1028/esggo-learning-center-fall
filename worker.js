// Cloudflare Worker - esggo-learning-center 靜態網站代理
// 部署至: https://esggo-learning-center.esggo.co

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // 允許所有路徑存取
  const pathname = url.pathname
  
  // 使用 GitHub 原始檔作為內容來源
  if (pathname === '/' || pathname === '/index.html') {
    return serveHtml()
  }
  
  // 其他路徑都轉到 index.html ( SPA 支援 )
  return serveHtml()
}

async function serveHtml() {
  // 直接返回 HTML 內容
  const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ESGGO 學習中心 - OA-Team 30 蜂群聖典</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', sans-serif;
      background: linear-gradient(135deg, #10243f 0%, #0a1626 100%);
      color: #e8e0d8;
      line-height: 1.7;
      min-height: 100vh;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    header {
      text-align: center;
      padding: 2rem 0;
      border-bottom: 1px solid rgba(201, 162, 75, 0.2);
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 2.5rem;
      background: linear-gradient(90deg, #c9a24b, #eba37c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle { color: #8a9a8d; font-size: 1.1rem; }
    .card {
      background: rgba(16, 36, 63, 0.6);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(201, 162, 75, 0.1);
      transition: transform 0.2s;
    }
    .card:hover { transform: translateY(-2px); }
    .card h2 {
      color: #c9a24b;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .card h2::before { content: '◆'; }
    .chapter {
      background: rgba(30, 40, 60, 0.7);
      border-radius: 8px;
      padding: 1.2rem;
      margin: 1rem 0;
      border-left: 4px solid #c9a24b;
    }
    .chapter h3 { color: #c9a24b; margin-bottom: 0.8rem; }
    .chapter p { color: #d4c8a6; line-height: 1.6; }
    .chapter ul { margin-left: 1.5rem; margin-top: 0.5rem; }
    .chapter li { margin: 0.3rem 0; color: #b8a58e; }
    .tag {
      display: inline-block;
      padding: 0.2rem 0.8rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
      margin-right: 0.5rem;
    }
    .tag-primary { background: rgba(201, 162, 75, 0.2); color: #c9a24b; }
    .tag-tech { background: rgba(138, 154, 141, 0.2); color: #8a9a8d; }
    .five-t-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .five-t-item {
      background: rgba(16, 36, 63, 0.5);
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }
    .five-t-item h4 { color: #c9a24b; font-size: 0.9rem; margin-bottom: 0.5rem; }
    .five-t-item p { font-size: 0.8rem; color: #b8a58e; }
    footer {
      text-align: center;
      padding: 2rem 0;
      margin-top: 2rem;
      border-top: 1px solid rgba(201, 162, 75, 0.2);
      color: #6b7b5e;
      font-size: 0.9rem;
    }
    .logo {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #10243f, #c9a24b);
      border-radius: 12px;
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="logo">ESGGO</div>
      <h1>OA-Team 30 蜂群聖典</h1>
      <p class="subtitle">5T 治理 • 30 矩陝 • AI Station 生產線 • 電子報發送 • 進化路線圖</p>
    </header>
    <main>
      <div class="card">
        <h2>5T 治理框架</h2>
        <div class="five-t-grid">
          <div class="five-t-item">
            <h4>Traceable</h4>
            <p>來源代碼可查</p>
          </div>
          <div class="five-t-item">
            <h4>Trackable</h4>
            <p>生命週期可追</p>
          </div>
          <div class="five-t-item">
            <h4>Tangible</h4>
            <p>UI/UX 可感</p>
          </div>
          <div class="five-t-item">
            <h4>Transparent</h4>
            <p>演算法可見</p>
          </div>
          <div class="five-t-item">
            <h4>Trustworthy</h4>
            <p>數據不可改</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <h2>30 人蜂群矩陣</h2>
        <p>策略組 (1-6) • 技術組 (7-12) • 創意組 (13-18) • 營銷組 (19-24) • 守衛組 (25-30)</p>
      </div>
      
      <div class="card">
        <h2>AI Station 七模組生產線</h2>
        <p>編排中心、文字解析、語音合成、視覺生成、渲染引擎、雲端儲存、溯源庫</p>
      </div>
      
      <div class="card">
        <h2>電子報發送整合</h2>
        <p>Email/Telegram/Slack/n8n/Webhook 6 種週報</p>
      </div>
    </main>
    <footer>
      <p>© 2026 ESGGO 學習中心 | 深藍#10243f + 暖金#c9a24b | 5T 治理</p>
    </footer>
  </div>
</body>
</html>`
  
  return new Response(html, {
    headers: { 
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300'
    }
  })
}