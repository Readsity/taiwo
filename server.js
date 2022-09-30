const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "welcome to readsity api" });
});

require("./src/routes/user.routes.js")(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server runing at ${PORT}.`)
});