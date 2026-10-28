const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const page = path.join(__dirname, 'public', 'index.html');

http.createServer((req, res) => {
  if (req.url === '/health') { res.end('ok'); return; }
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(fs.readFileSync(page));
}).listen(port, () => console.log(`shop on ${port}`));
