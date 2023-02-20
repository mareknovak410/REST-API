// 1) nahraju do svoji aplikace balik s kodem pro HTTP
const http = require('http'); // neco jako "using" v C#

// 2) zmatlam vsechno dohromady
http.createServer((dotaz, odpoved) => {
    odpoved.writeHead(200, {'Content-type': 'text/plain'});
    odpoved.write('Hello world!');
    odpoved.end();
}).listen(8000);

console.log('Server beží na adrese http://localhost:8000...');

