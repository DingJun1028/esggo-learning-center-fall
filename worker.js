// Cloudflare Worker - esggo-learning-center 靜態網站
// 訪問 https://esggo-learning-center.esggo.co/

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
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: 0.8rem; text-align: left; border-bottom: 1px solid rgba(201, 162, 75, 0.1); }
    th { background: rgba(201, 162, 75, 0.1); color: #c9a24b; }
    td { color: #d4c8a6; }
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
      <p class="subtitle">5T 治理 • 30 矩陝 • AI Station 生產線</p>
    </header>

    <main>
      <div class="card">
        <h2>5T 治理框架</h2>
        <div class="five-t-grid">
          <div class="five-t-item"><h4>Traceable</h4><p>來源代碼可查</p></div>
          <div class="five-t-item"><h4>Trackable</h4><p>生命週期可追</p></div>
          <div class="five-t-item"><h4>Tangible</h4><p>UI/UX 可感</p></div>
          <div class="five-t-item"><h4>Transparent</h4><p>演算法可見</p></div>
          <div class="five-t-item"><h4>Trustworthy</h4><p>數據不可改</p></div>
        </div>
      </div>

      <div class="card">
        <h2>30 矩陝</h2>
        <table>
          <thead><tr><th>編號</th><th>組別</th><th>人數</th></tr></thead>
          <tbody>
            <tr><td>1-6</td><td>策略組</td><td>6 人</td></tr>
            <tr><td>7-12</td><td>技術組</td><td>6 人</td></tr>
            <tr><td>13-18</td><td>創意組</td><td>6 人</td></tr>
            <tr><td>19-24</td><td>營銷組</td><td>6 人</td></tr>
            <tr><td>25-30</td><td>守衛組</td><td>6 人</td></tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h2>AI Station 七模組生產線</h2>
        <table>
          <thead><tr><th>#</th><th>模組</th><th>功能</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>編排中心</td><td>FastAPI + 背景執行緒池</td></tr>
            <tr><td>2</td><td>文字解析</td><td>句法解析 + DNA 標記</td></tr>
            <tr><td>3</td><td>語音合成</td><td>edge-tts / ElevenLabs</td></tr>
            <tr><td>4</td><td>視覺生成</td><td>Pillow 品牌漸層</td></tr>
            <tr><td>5</td><td>渲染引擎</td><td>ffmpeg + 同步字幕</td></tr>
            <tr><td>6</td><td>雲端儲存</td><td>本地 /storage / S3</td></tr>
            <tr><td>7</td><td>溯源庫</td><td>SQLite 作業庫</td></tr>
          </tbody>
        </table>
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