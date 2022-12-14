const app = require('express')();
const { v4 } = require('uuid');
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.end(`API Vercel`);
});

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.post('/api/callback', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.sendStatus(200)
    res.send(req.body);
});

app.listen(3000, () => {
  console.log("Running on port 3000.");
});

module.exports = app;