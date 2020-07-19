const axios = require("axios");
const keys = require("../keys/keys");
const db = require('../models');
const path = require("path");


module.exports = (app) => {

    // app.get('/', function (req, res) {
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
    app.get('/makerequest', (req, res) => {
        res.send('request')
    })
    app.get("/search", (req, res) => {
        const { keyword, chosenSC } = req.query;
        const key = keys.natParkService.api_key
        console.log(`************************`)
        console.log(`*******${key}**********`)
        console.log(`************************`)
        // res.json({})
        const fields = "fields=addresses%2Cimages%2Ccontacts%2CweatherInfo%2CentranceFees%2CoperatingHours"
        const queryUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${chosenSC}&q=${keyword}&${fields}&api_key=${key}`;
        axios.get(queryUrl).then((response) => {
            const parks = response.data.data;
            console.log(queryUrl)
            console.log(response.data.data)
            res.json(parks);
            parks.forEach((element => {
                db.Parks.find({ fullName: element.fullName }).then((data) => {
                    console.log(`************************`)
                    console.log(`*******Data**********`)
                    console.log(`************************`)
                    console.log(data)
                    console.log(`************************`)
                    console.log(`*******End Data**********`)
                    console.log(`************************`)
                    if (data === undefined || data.length == 0) {
                        db.Parks.create(element).then((data) => {
                        })
                    }
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
            }).catch(function (err) {
                res.json(err);
            })
    })

    app.post("/search", (req, res) => {
        db.Parks.create(req.body.data)
            .then((data) => {
                res.json(data)
            }).catch(function (err) {
                res.json(err);
            })
    })
    app.post("/post-comments", (req, res) => {
        db.Comments.create(req.body)
            .then((data) => {
                res.json(data)
            }).catch(function (err) {
                res.json(err);
            })
    })
}