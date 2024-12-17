const express = require('express');
const routes = require('./v1/routes/tenis_rutas')
const cors = require('cors');
const morgan = require('morgan')
const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
const port = process.env.PORT || 3000;


app.use("/api/v1/partidos",routes)

app.listen(port, () => console.log(`listening on http://localhost:${port}`));


