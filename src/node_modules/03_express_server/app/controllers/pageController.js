
exports.index = (request, response) => {
    response.render('page/index', {
        title: 'Express aplikace',
    });
};

exports.error = (request, response) => {
    response.render('page/error', {
        title: 'Chyba',
    });
};
