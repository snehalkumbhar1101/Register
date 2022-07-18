const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const cors = require('cors')


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config


var corOperations = {
  origin:"https://localhost:5000"
}


// Use Routes
//middleware

app.use(cors(corOperations))

app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use('/api/users', users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
