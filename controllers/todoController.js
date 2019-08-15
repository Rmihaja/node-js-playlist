/* eslint-disable no-console */
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const data = [{ item: 'learn javascript' }, { item: 'learn node.js' }, { item: 'learn websocket' }];

module.exports = app => {
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', (req, res) => {});
};
