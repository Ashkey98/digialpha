
const mongoose = require("mongoose");


const DB_URI = 'mongodb+srv://ashish14765:digialpha@digialpha.zkinnag.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
useUnifiedTopology: true,
})
.then((data) => {
  console.log(`Mongodb connected with server: ${data.connection.host}`);
})
.catch((err) => console.log(err.message));