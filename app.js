
let express = require('express');
let http = require('http');
let fs = require('fs');

let app = express();


http.createServer(function (req, res) {
    let url = req.url;
    switch (url) {
        case '/':
            getStaticFileContent(res, 'app/index.html', 'text/html');
            break;
        default:
            res.writeHead(404, { 'content-type': 'text/plain' });
            res.end('404- PAGE NOT FOUND');
    }
}).listen(9099);
console.log('Sample Twillio API Server is listening at http://%s:%s', 9099);


function getStaticFileContent(res, filepath, contentType) {
    fs.readFile(filepath, function (err, data) {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end('500 - Internal Server Error');
        }

        if (data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }
    })
}
// let server = app.listen(3000, function () {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('Sample Twillio API Server is listening at http://%s:%s', host, port);
// });
/**####SURYA*/