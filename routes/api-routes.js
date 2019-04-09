const path = require("path");
const axios = require("axios");
const keys = require("../keys/keys");

module.exports = (app) => {
    // app.get("/", (req, res) => {
    //     console.log("home");
    //     res.sendFile(path.join(__dirname, "/../public/index.html"));
    // });

    app.get("/search", (req, res) => {
        const { keyword, chosenSC } = req.query;
        const key = keys.natParkService.api_key
        const fields = "fields=addresses%2Cimages%2Ccontacts%2CweatherInfo%2CentranceFees%2CoperatingHours"
        const queryUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${chosenSC}&q=${keyword}&${fields}&api_key=${key}`;
        axios.get(queryUrl).then((response) => {
            console.log(response.data.data);
            res.json(response.data);
        }).catch((err) => {
            console.log(err)
        });
        // res.json("{success: 200}");
    })
    // app.get("*", (req, res) => {
    //     console.log("search");
    //     console.log(req.params);
    //     console.log(req.query);
    //     const { query, stateCode } = req.query;
    //     console.log(`q ${query} sc ${stateCode}`)
    //     res.send("{success: 200}");
    // });
}