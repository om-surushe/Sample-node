const app = require('express')()
require('express-ws')(app);

const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});