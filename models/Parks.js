const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ParkSchema = new Schema({
    contacts: Schema.Types.Mixed,
    states: String,
    entranceFees: [Schema.Types.Mixed],
    directionsInfo: String,
    directionsUrl: String,
    url: String,
    weatherInfo: String,
    name: String,
    operatingHours: [Schema.Types.Mixed],
    latLong: String,
    images: [Schema.Types.Mixed],
    description: String,
    designation: String,
    parkCode: String,
    addressesaddresses: [Schema.Types.Mixed],
    id: String,
    fullName: String
});

const Parks = mongoose.model('Parks', ParkSchema);

module.exports = Parks;