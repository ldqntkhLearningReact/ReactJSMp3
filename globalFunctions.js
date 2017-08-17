const path = require('path');
const fs = require('fs');
const request = require('request');

/**
 * return a controller
 * @param {String} controllerName Controller name 
 */
exports.getController = function (controllerName) {
    return require('./controllers/' + controllerName + 'Controller.js');
}

/**
 * return a model
 * @param {String} modelsName Model name 
 */
exports.getModels = function (modelsName) {
    return require('./models/' + modelsName + 'Model.js');
}

/**
 * return a view name
 * @param {String} viewName View name 
 */
exports.getView = function (viewName) {
    return viewName + '.ejs';
}

/**
 * Lấy danh sách file
 */
exports.getDirectories = function (srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => fs.lstatSync(path.join(srcpath, file)).isFile())
}

/**
 * get html from url
 * @param {String} url
 * @return {Object} promise
 */
exports.getByCurl = (url) => {
    return new Promise ((resolve, reject) => {
        request ({
            url : url,
            method : "GET",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            Encoding: "gzip, deflate",
            Language: "en-US,en;q=0.8"
        },
            function (error, response, body) {
                if (error) reject(new Error (error.message));
                resolve (body)
            }
        )
    });
}