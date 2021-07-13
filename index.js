const drakov = require('drakov');

const argv = {
    sourceFiles: './**.apib',
    serverPort: 5000,
    stealthmode: true,
    disableCORS: true,
    delay: 2000,
    method: ['DELETE','OPTIONS', 'GET', 'POST', 'PUT']
};

drakov.run(argv, () => {
    // started Drakov
    console.log('drakov running on 5000')

});