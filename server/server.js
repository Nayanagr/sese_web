const app = require("./src/app.js");
const connectDB = require("./src/database/database.js");

connectDB();

if (require.main === module) {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

module.exports = app;
