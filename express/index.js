const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} from ${subreddit}</h1>`)
})

app.post('/cats', (req, res) => {
  res.send('got your post request');
})

app.get('/cats', (req, res) => {
  res.send('MEOW!!');
})

app.get('/dogs', (req, res) => {
  res.send('WOOF!!');
})

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('u searched nothing');
  }
  res.send(`<h1>Results for: ${q}</h1>`);
})

app.get('*', (req, res) => {
  res.send('Where ???');
})

app.listen(8080, () => {
  console.log("listening port 8080");
});
