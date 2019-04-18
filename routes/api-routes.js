const axios = require("axios");
const keys = require("../keys/keys");
const db = require('../models');


module.exports = (app) => {

    app.get("/search", (req, res) => {
        const { keyword, chosenSC } = req.query;
        const key = keys.natParkService.api_key
        const fields = "fields=addresses%2Cimages%2Ccontacts%2CweatherInfo%2CentranceFees%2CoperatingHours"
        const queryUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${chosenSC}&q=${keyword}&${fields}&api_key=${key}`;
        axios.get(queryUrl).then((response) => {
            const parks = response.data.data;
            res.json(parks);
            parks.forEach((element => {
                db.Parks.find({ fullName: element.fullName }).then((data) => {
                    console.log("found");
                    if (data === undefined || data.length == 0) {
                        console.log("not found")
                        db.Parks.create(element).then((data) => {
                            console.log("creating new")
                            console.log(data)
                        })
                    }
                    console.log(data);
                }).catch((err) => console.log(err))
            }))
        }).catch((err) => {
            console.log(err)
        });
        // res.json("{success: 200}");
    })

    app.get("/get-comments", (req, res) => {
        const { parkId } = req.query; 
        db.Comments.find({ parkId })
            .then((data) => {
                res.json(data)
                console.log(data);
            }).catch(function (err) {
                res.json(err);
            })
    })

    app.post("/search", (req, res) => {
        db.Parks.create(req.body.data)
            .then((data) => {
                res.json(data)
                console.log(data);
            }).catch(function (err) {
                res.json(err);
            })
    })
    app.post("/post-comments", (req, res) => {
        console.log(req.body);
        db.Comments.create(req.body)
            .then((data) => {
                res.json(data)
                console.log(data);
            }).catch(function (err) {
                res.json(err);
            })
    })
}