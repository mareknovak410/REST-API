
exports.hello = (request, response) => {
    response.send('Hello World!');
};

exports.json = (request, response) => {
    response.json({
        greetings: 'Hello World!'
    });
};

