const express = require('express');

const app = express();

app.get('/hello/:id', async (req, res) => {
  const id = req.params['id'];

  res.send({content: 'hello, world', id});
});

app.listen(3001, () => {
  console.log('Listening...');
});