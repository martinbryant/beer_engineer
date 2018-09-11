const fs = require('fs');
const Ftp = require('ftp');
const glob = require('glob');

const basePath = './build';
const destinationPath = 'beer-engineer';
const config = {
    // We store the credentials for
    // our FTP server as environemnt
    // variables for security reasons.
    host: process.env.FTP_HOST,
    password: process.env.FTP_PASSWORD,
    user: process.env.FTP_USER,
    port: '21'
};

const ftp = new Ftp();

function createDirectory(destination) {
    console.log(`Creating ${destination} on the server`)
    return ftp.mkdir(destination, true, (error) => {
        if (error) throw error;

        ftp.end();
    });
}

function uploadFile(file, destination) {
    console.log(`Uploading ${file} to ${destination}`)
    ftp.put(file, destination, (error) => {
        if (error) throw error;

        console.log(`${file} => ${destination}`);
        ftp.end();
    });
}

// Check if the path is a directory and
// either create the directory on the server
// if it is a directory, or upload the file
// if it is a file.
function handlePath(path) {
    const relativeFile = path.replace(`${basePath}/`, '');
    const destination = `${destinationPath}/${relativeFile}`;

    if (fs.lstatSync(path).isDirectory()) {
        return createDirectory(destination);
    }

    return uploadFile(path, destination);
}

ftp.on('ready', () => {
    console.log('ready')
    // Get an array of all files and directories
    // in the given base path and send them to the
    // `handlePath()` function to decide if a
    // directory is created on the server or the
    // file is uploaded.
    glob.sync(`${basePath}/**/*`).forEach(handlePath);
});

ftp.connect(config);

//use ftp-promise as dev-dep
//replace env variables for user, password, host
//run on circleci as node circleci/deploy

const EXPIRATION_DATE_IN_DAYS = 1;

// ...

function isExpired(date) {
    const oneDayInMilliseconds = 86400000;
    const timestamp = new Date(date).getTime();
    const expirationTimestamp = Date.now() - (oneDayInMilliseconds * EXPIRATION_DATE_IN_DAYS);

    return timestamp < expirationTimestamp;
}

function cleanup(pathObject, directory) {
    if (pathObject.name === '.' || pathObject.name === '..') return;

    const path = `${directory}/${pathObject.name}`;

    // If the current path is a directory
    // we recursively check the files in it.
    if (pathObject.type === 'd') {
        return cleanupRemoteDirectory(path);
    }

    if (isExpired(pathObject.date)) {
        ftp.delete(path, (error) => {
            if (error) throw error;

            console.log(`Removed: ${path}`);
            ftp.end();
        });
    }
}

function cleanupRemoteDirectory(directory) {
    return ftp.list(directory, (error, pathObjects) => {
        if (error) throw error;

        pathObjects.forEach(pathObject => cleanup(pathObject, directory));
        ftp.end();
    });
}

ftp.on('ready', () => {
    // ...

    // Cleanup files older than the given amount of
    // days. Keep in mind that this only makes sense
    // if you've deployed at least once since the
    // given amount of days.
    cleanupRemoteDirectory(destinationPath);
});

ftp.connect(config);