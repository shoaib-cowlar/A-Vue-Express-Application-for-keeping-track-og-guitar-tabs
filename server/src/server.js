const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
// const {sequelize} = require('./models');
const config = require('./config/index');
const userRoutes = require('./routes/userRoutes')


const port = config.port;
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user/',userRoutes)

// sequelize.sync().then(()=>{
  app.listen(port, () => {
    console.log(`server is running on localhost:${port}`);
  });
  
// }).catch

