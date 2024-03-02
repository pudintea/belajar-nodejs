const express       = require('express');
const app           = express();
const mysql         = require('mysql');
const BodyParser    = require('body-parser');
const path          = require('path');

app.use(express.static(path.join(__dirname,"public")));
app.use(BodyParser.urlencoded({extended: true}));

// Mengunakan EJS
app.set("view engine", "ejs");
app.set("views", "views");

const db    = mysql.createConnection({
    host: "localhost",
    database: "db_test",
    user: "root",
    password: ""
})

db.connect((err)=> {
    if (err) throw err;
    console.log("Database Connected....");
    //Tampilkan 
    app.get("/", (req, res) => {
            const sql = "SELECT * FROM sekolah";
            db.query(sql, (err, result) =>{
                const sekolah = JSON.parse(JSON.stringify(result));
                res.render("index", {sekolah: sekolah, title: "Daftar Murid"});
            });
    })

    //Tambah
    app.post("/tambah",(req, res) => {
        const tambahSQL = `INSERT INTO sekolah (nama, kelas) VALUES('${req.body.nama}', '${req.body.kelas}');`;
        db.query(tambahSQL, (err, result) =>{
            if (err) throw err 
            res.redirect("/");
        })
    })
})

app.listen(8000, () => {
    console.log("Server Ready....");
})