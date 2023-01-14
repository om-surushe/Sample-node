const app = require('express')()
require('express-ws')(app);

// REST endpoint
app.get('/', (req, res) => {
    res.send('Fast response');
});

// Websocket endpoint
app.ws('/echo', (ws, req) => {
    ws.on('message', (msg) => {
        ws.send(msg);
    });
});

app.listen(3000);