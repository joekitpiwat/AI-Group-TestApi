const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/", (req, res) => {
    const body = req.body;
    if(!body?.base || !body?.height) {
       return res.send({
            message: 'base and height require.',
            area: null
        })
    }

    const result = 0.5 * body.base * body.height;
    res.send({
        message: '',
        area: result
    })
    
});

app.listen(port, () => {
    console.log("starting server at port " + port);
});