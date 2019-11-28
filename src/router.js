const handlers = require('./handlers.js');

const router = (request, response) => {
    const endpoint = request.url;
    console.log(endpoint);
    if(endpoint === '/') {
        handlers.handleHome(request, response);
    }
    else if (endpoint.includes('public')) {
        handlers.handlePublic(request, response);
      }
      else if (endpoint.includes('search')) {
          handlers.handleData(request, response, endpoint);
      }
    else {
        response.writeHead(404);
        response.end('404 not found');
}
}




module.exports = router;
