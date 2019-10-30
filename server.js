const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/api', router);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});