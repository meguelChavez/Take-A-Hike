let path = require("path");

module.exports = (app) => {
    // app.get("/", (req, res) => {
    //     console.log("home");
    //     res.sendFile(path.join(__dirname, "/../public/index.html"));
    // });

    app.get("/search", (req,res) =>{
        console.log("search");
        // console.log(req.query);
        console.log(req.query);
        const {query, stateCode} = req.query;
        console.log(`q ${query} sc ${stateCode}`)
        res.json("{success: 200}");
    })
    // app.get("*", (req, res) =>{
    //     res.sendFile(path.join(__dirname, "/../public/index.html"));
    // });
}