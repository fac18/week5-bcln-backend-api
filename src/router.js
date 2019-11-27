const handlers = require('./handlers.js');

const router = (request, response) => {
    const endpoint = request.url;
    console.log(endpoint);
    if(endpoint === '/') {
        handlers.handleHome(request, response);
    } 
    else if (endpoint.indexOf('public') !== -1) {
        handlers.handlerPublic(request, response);
    }
    // else if (endpoint.includes('/search')) {
    //     handlers.handlerData(request, response, endpoint);
    // }
} 




module.exports = router;
