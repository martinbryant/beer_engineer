var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: process.env.FTPUSER,
    password: process.env.FTPPASS,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/../build/",
    remoteRoot: "/public_html/beer-engineer",
    include: ['*']
}

ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))