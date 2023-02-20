// pouzity balik realizujici databazi
const jsondb = require('simple-json-db');
// pouzity balik realizujici hashovani
const bcrypt = require('bcryptjs');
// pripojeni dat databaze
const db = new jsondb('./data/users.json');

exports.addUser = (username, password) => {
    if(db.has(username)) {
        console.log(`Uživatel se jménem '${username}' již existuje.`);
        return false;
    }

    db.set(username, {
        password: bcrypt.hashSync(password)
    });
    return true;
}

exports.check = (username, password) => {
    // spatne jmeno
    if(!db.has(username)) {
        return false;
    }
    // spatne heslo
    if(!bcrypt.compareSync(password, db.get(username).password)) {
        return false;
    }

    return true;
}
