const multer = require("multer");
const sequelize = require("sequelize");

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "../uploads")
        },
        filename : function(req, file, cb){
            cb(null, file.fieldname+ "-" + Date.now() + ".jpg");
        }
    })
})

module.exports = upload