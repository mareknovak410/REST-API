const model = require('../models/userModel');

exports.signupForm = (request, response) => {
    response.render('user/signup', {
        title: 'Registrace',
    });
}

exports.signinForm = (request, response) => {
    response.render('user/signin', {
        title: 'Přihlášení',
    });
}

exports.signup = (request, response) => {
    // vytahani si dat z formulare do promennych
    const username = request.body.username;
    const password = request.body.password;
    const passwordCheck = request.body.passwordCheck;

    // kontroly vstupnich dat
    if(username.trim().length == 0) {
        return response.redirect('/user/signup');
    }
    if(password.trim().length == 0) {
        return response.redirect('/user/signup');
    }
    if(password != passwordCheck) {
        return response.redirect('/user/signup');
    }

    // prace modelu
    if(!model.addUser(username, password)) {
        return response.redirect('/page/error');
    }

    // vysledny view pri uspesne registraci
    return response.redirect('/user/signin');
}

exports.signin = (request, response) => {
    const username = request.body.username.trim();
    const password = request.body.password.trim();

    if(!model.check(username, password)) {
        return response.redirect('/user/signin');
    }

    request.session.signedInUser = username;

    return response.redirect('/user/profile');
}

exports.signout = (request, response) => {
    request.session.destroy();

    return response.redirect('/user/signin');
}

exports.profile = (request, response) => {
    const username = request.session.signedInUser;

    if(!username) {
        return response.redirect('/user/signin');
    }

    response.render('user/profile', {
        title: 'Profil',
        username,
    });
}
