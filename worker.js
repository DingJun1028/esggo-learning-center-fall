// Cloudflare Worker - ESGGO 2026 Berkeley 學習中心
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return serveHtml()
}

async function serveHtml() {
  const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ESGGO 學習中心</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #f5f5f5; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .header { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background: #fff; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .logo { font-size: 1.5rem; font-weight: bold; color: #10243f; }
    .header-actions { display: flex; gap: 15px; align-items: center; }
    .lang-btn { padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; background: #fff; cursor: pointer; }
    .login-btn { display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: #10243f; color: #fff; border: none; border-radius: 20px; cursor: pointer; }
    .status-badge { position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 12px; font-size: 0.85rem; }
    .hero { background: linear-gradient(135deg, #10243f 0%, #0a1626 100%); color: #fff; padding: 40px 30px; border-radius: 12px; margin-bottom: 30px; position: relative; text-align: center; }
    .hero h1 { font-size: 2.8rem; line-height: 1.2; margin-bottom: 10px; }
    .hero .serif { font-family: Georgia, serif; font-size: 2rem; opacity: 0.9; margin-bottom: 5px; }
    .core-card { background: #10243f; border-radius: 12px; padding: 40px 30px; margin-bottom: 30px; border-left: 5px solid #c9a24b; color: #fff; text-align: center; }
    .core-card h1 { font-family: Georgia, serif; font-size: 2.5rem; margin-bottom: 10px; }
    .core-card .subtitle { font-weight: bold; font-size: 1.8rem; color: #e8e0d8; }
    .action-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px; }
    .action-card { background: #fff; border-radius: 12px; padding: 30px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); cursor: pointer; transition: transform 0.2s; }
    .action-card:hover { transform: translateY(-3px); box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
    .action-card.active { border: 2px solid #10243f; }
    .icon { width: 60px; height: 60px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #f0f0f0; font-size: 2rem; }
    .action-card .label { font-weight: 500; color: #333; }
    .footer { text-align: center; padding: 20px; color: #888; font-size: 0.9rem; }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="logo">ESGGO</div>
      <div class="header-actions">
        <button class="lang-btn">繁體中文 ▼</button>
        <button class="login-btn">📧 使用 Google 登入</button>
      </div>
    </header>
    <div class="status-badge">Firestore 已連線</div>
    <section class="hero">
      <h1><span class="serif">2026 Berkeley</span><br>柏克萊國際永續策略人才培育課程學習中心</h1>
    </section>
    <section class="core-card">
      <h1>2026 Berkeley</h1>
      <p class="subtitle">柏克萊國際永續策略人才培育課程學習中心</p>
    </section>
    <section class="action-grid">
      <div class="action-card active"><div class="icon">📚</div><div class="label">學員資源區</div></div>
      <div class="action-card"><div class="icon">⬆️</div><div class="label">作業上傳</div></div>
      <div class="action-card"><div class="icon">▶️</div><div class="label">課程回放</div></div>
      <div class="action-card"><div class="icon">😊</div><div class="label">滿意調查</div></div>
    </section>
    <footer class="footer">2026 Berkeley柏克萊國際永續策略人才培育課程學習中心 | 柏克萊國際策略與創新 ESG 人才培育課程</footer>
  </div>
</body>
</html>`
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}