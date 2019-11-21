import express from 'express';

const app = express();
const port = 8080;

app.use((req, res) => {
    if (req.get('authorization') === 'ASUPERSECUREAUTHTOKEN') {
        res.json({
            ok: true
        })
    } else {
        res.status(403).json({
            ok: false
        })
    }
})

app.listen(port, () => console.log(`listening on port ${port}!`));