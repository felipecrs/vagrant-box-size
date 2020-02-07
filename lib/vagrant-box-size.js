const app = require('@runkit/runkit/express-endpoint/1.0.0')(exports);
const request = require('request'); // peer dependency
const rp = require('request-promise');
const cheerio = require('cheerio');

app.get('/:organization/:boxName/:provider?', async (request, response) => {
	const url = `https://app.vagrantup.com/${request.params.organization}/boxes/${request.params.boxName}`;

	const page = cheerio.load(await rp(url));

	const selector = `.list-group-item:contains(${request.params.provider || 'virtualbox'})`;
	const size = page(selector).first().text().split('(')[1].split(')')[0];

	response.send({
		schemaVersion: 1,
        namedLogo: 'vagrant',
		label: 'box size',
        labelColor: '#1563FF',
		message: size,
	});
});
;