const express = require("express");
const app = express();

const dbConfig=require('./db')
const hallsRoute=require('./routes/hallsRoute')
const usersRoute=require('./routes/usersRoute')
const bookingsRoute=require('./routes/bookingsRoute')

app.use(express.json())
app.use('/api/halls',hallsRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',bookingsRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server started using nodemon`));
