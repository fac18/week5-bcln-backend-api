const http = require('http');
const https = require('https');

const myRequest = (url,cb) => {
        const protocol = url.includes('https') ? https : http
        protocol
    .get (url, response => {
        let data = '';
        response.on('data', chunk => {
            data += chunk;
        });
        response.on('end', () => {
            const body = JSON.parse(data);
            cb(null, body);
        })
    })
    .on('error', (error) => {
        cb(err, null);
    });
}

module.exports = myRequest;