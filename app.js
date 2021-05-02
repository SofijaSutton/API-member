const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/members');
const routes = require('./Routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//home page
app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke! Route does not exist.');
});

const init = async () => {
    try {
    //  await db.sync();
      app.listen(3000, () => {
        console.log('Server is listening on port 3000!');
      })
    } catch (err) {
      console.error(err);
    }
}

init();

module.exports = app;