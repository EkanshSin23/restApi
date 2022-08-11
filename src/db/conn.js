const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/loginDetail", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('successful');
}).catch((e) => {
    console.log(e);
})