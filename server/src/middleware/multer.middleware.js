const multer = require("multer");
const path = require("path");
const os = require("os");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, os.tmpdir());
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

module.exports = {
    upload: multer({ storage }),
};
