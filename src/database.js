const mongoose = require('mongoose');

// connect to mongodb
const dbURI = 'mongodb+srv://jenferp:cheese420@cluster0.kgyvb.mongodb.net/SketchedOut?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewURlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch((error => console.log(err)));


