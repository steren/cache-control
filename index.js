import express from 'express';

const app = express();
 
app.get('/', (req, res) => {
  let maxAge = req.query.maxAge || 30;
  let sMaxAge = req.query.sMaxAge || 300;

  let header = `public, max-age=${maxAge}, s-maxage=${sMaxAge}`;

  res.set('Cache-Control', header);
  res.send(`
    API: <a href="/?maxAge=${maxAge}&sMaxAge=${sMaxAge}">/?maxAge=${maxAge}&sMaxAge=${sMaxAge}</a><br>
    Warning: Chrome will ignore the max-age header if you use the Reload button, click the link above instead.<br>
    This request:<br>
    Cache-Control: ${header}<br>
    Date recorded:<br>
    ${new Date()}
  ` );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('I am listening on port', port);
});
