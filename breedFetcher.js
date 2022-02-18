const request = require("request");
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) return callback(error, null);
    const desc = JSON.parse(body)[0]['description'];
    callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };


