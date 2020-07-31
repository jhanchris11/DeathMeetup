const mongoose = require("mongoose");

const meetupDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_MEETUP, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

    } catch (error) {

        process.exit();
    }
};

module.exports = meetupDB;