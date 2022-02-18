const request = require("request");
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`


request(url, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});


