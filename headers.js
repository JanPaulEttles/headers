
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
//const http = require('http');
const request = require('request');


fs.createReadStream('test.csv')
    .pipe(csv.parse())
    .on('error', error => console.error(error))
    .on('data', row => lookUp(row))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));


function lookUp(data) {

	const options = {
		url: data[1],
		headers: {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_0) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4'
		}
	};

	request(options, function (error, response, body) {
		if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
			console.log('\t\tJAN STATUS: ' + response.statusCode);
			console.log('HEADERS: ' + JSON.stringify(response.headers));
		}

		if (!error && response.statusCode == 200) {
			//const info = JSON.parse(body);
			//console.log('\t\tJAN STATUS: ' + response.statusCode);
			//console.log('HEADERS: ' + JSON.stringify(response.headers));
		}
	});
/*
	var options = {
		host: data[1],
		headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_0) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4' },
		method: 'GET'
	};

	http.get(options, function (response) {
		// Detect a redirect
		console.log('get: ' + data[1]);
		if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
			console.log('\t\tJAN STATUS: ' + response.statusCode);
			console.log('HEADERS: ' + JSON.stringify(response.headers));
			}
		if (response.statusCode == 200) {
			console.log('STATUS: ' + response.statusCode);
			//console.log('HEADERS: ' + JSON.stringify(response.headers));
			//console.log(body);
			var diff = process.hrtime(startTime);
			//console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
		}
	})

*/



}



