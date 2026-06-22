/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here

const url = require('url');
const http = require('http');

const server = http.createServer((req, res) =>{
    let parsed = url.parse(req.url, true);
    const curdate = new Date(parsed.query.iso);

    if(parsed.pathname === "/api/parsetime"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            'hour': curdate.getHours(),
            'minute': curdate.getMinutes(),
            'second': curdate.getSeconds()
        }));

    }
    else if(parsed.pathname === "/api/unixtime"){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            'unixtime': curdate.getTime()
        }));
    }
});



server.listen(3000, () => {
    
});
